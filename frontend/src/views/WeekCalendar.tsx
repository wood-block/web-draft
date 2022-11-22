import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { placeApi } from "../apis/placeApi";

const BackHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header-back">
          <a className="header__link" href="">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="header__icon"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

type CalendarParams = {
  date: string;
};

export const WeekCalendar = () => {
  const { date } = useParams<CalendarParams>();
  const [place, setPlace] = useState(0);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    if (date) {
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 7);
      setEndDate(endDate);
    }
  }, [date]);

  useEffect(() => {
    placeApi.getUserPlaces(1).then((res) => {
      // [ ]: tab으로 place 여러개일 경우 여러개 출력
      setPlace(res.data[0].id);
    });
  }, []);

  useEffect(() => {
    if (place && calendarRef.current && date && endDate) {
      const calendarApi = calendarRef.current.getApi();
      placeApi
        .getPlaceReservationsByTime(
          place,
          new Date(date).toISOString(),
          endDate.toISOString()
        )
        .then((res) => {
          // [ ]: 중복 코드 리팩토링
          const events = res.data.map((event) => {
            return { start: event.bookingStart, end: event.bookingEnd };
          });
          calendarApi.addEventSource(events);
        });
    }
  }, [place, date, endDate]);

  return (
    <>
      <BackHeader />
      <div className="wrapper">
        <FullCalendar
          ref={calendarRef}
          allDaySlot={false}
          headerToolbar={{ start: "", center: "", end: "" }}
          plugins={[timeGridPlugin]}
          initialView="timeGrid"
          locale={"ko"}
          visibleRange={{
            start: date,
            end: endDate,
          }}
          height="auto"
        />
      </div>
    </>
  );
};
