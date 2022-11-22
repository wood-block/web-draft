import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./app-calendar.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { placeApi } from "../apis/placeApi";

// [ ]: customize 좌우 버튼 hover
export const AppCalendar = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState(0);
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    placeApi.getUserPlaces(1).then((res) => {
      // [ ]: tab으로 place 여러개일 경우 여러개 출력
      setPlace(res.data[0].id);
    });
  }, []);

  // [ ]: fullcalendar issue 발생하는지 확인 필요
  // Reference: https://stackoverflow.com/questions/72119019/why-does-useeffect-react-hook-not-work-properly-with-dependency
  useEffect(() => {
    if (place && calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      placeApi.getPlaceReservations(place).then((res) => {
        // [ ]: 중복 코드 리팩토링
        const events = res.data.map((event) => {
          return { start: event.bookingStart, end: event.bookingEnd };
        });
        calendarApi.addEventSource(events);
      });
    }
  }, [place]);

  return (
    <div className="container">
      <div className="wrapper">
        <FullCalendar
          ref={calendarRef}
          buttonIcons={{
            prev: "chevron-left",
            next: "chevron-right",
          }}
          headerToolbar={{ start: "prev", center: "title", end: "next" }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale={"ko"}
          // height={600}
          weekends={true}
          selectable={true}
          dayMaxEvents={true}
          selectMirror={true}
          dateClick={(info) => {
            navigate(`/calendar/${info.dateStr}`);
          }}
        />
      </div>
    </div>
  );
};
