import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./app-calendar.scss";
import { useNavigate } from "react-router-dom";

// [ ]: customize 좌우 버튼 hover
export const AppCalendar = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="wrapper">
        <FullCalendar
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
            console.log(info);
            navigate(`/calendar/${info.dateStr}`);
            //
          }}
          events={[
            {
              title: "aou",
              start: "2022-11-20T03:00:00",
              end: "2022-11-20T06:00:00",
            },
            { title: "aou", date: "2022-11-20T00:00:00" },
            { title: "aou", date: "2022-11-20T00:00:00" },
            { title: "aou", date: "2022-11-20T00:00:00" },
          ]}
        />
      </div>
    </div>
  );
};
