import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthActions } from "../features/auth/auth.action";
import { Link } from "react-router-dom";

export const AppHeader = () => {
  const authActions = useAuthActions();
  return (
    <header className="header header-sticky">
      <div className="header__inner">
        <div className="header-user">
          <Link className="header__link" to={"/login"}>
            <FontAwesomeIcon icon={faUser} className="header__icon" />
          </Link>
        </div>
        <div className="header-title">
          <a className="header-title__link" href="">
            뮤지컬팝스오케스트라
          </a>
        </div>
        <div className="header-search" onClick={authActions.logout}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="header__icon"
          />
        </div>
      </div>
    </header>
  );
};
