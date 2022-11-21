import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AppCalendar, WeekCalendar } from "./views";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <AppCalendar />,
      },
    ],
  },
  {
    path: "/calendar/:date",
    element: <WeekCalendar />,
  },
]);
