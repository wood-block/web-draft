import { Outlet } from "react-router-dom";
import { AppFooter, AppHeader } from "./components";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
}

export default App;
