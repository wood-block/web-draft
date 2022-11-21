import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

export const WeekCalendar = () => {
  const params = useParams();

  // TODO: 로직 수정
  let endDate;
  if (params.date) {
    endDate = new Date(params.date);
    endDate.setDate(endDate.getDate() + 7);
  }

  return (
    <>
      <BackHeader />
      <div className="wrapper">
        <FullCalendar
          allDaySlot={false}
          headerToolbar={{ start: "", center: "", end: "" }}
          plugins={[timeGridPlugin]}
          initialView="timeGrid"
          locale={"ko"}
          visibleRange={{
            start: params.date,
            end: endDate,
          }}
          height="auto"
        />
      </div>
    </>
  );
};
