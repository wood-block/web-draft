import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export const AppHeader = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header-user">
          <a className="header__link" href="login">
            <FontAwesomeIcon icon={faUser} className="header__icon" />
          </a>
        </div>
        <div className="header-title">
          <a className="header-title__link" href="">
            뮤지컬팝스오케스트라
          </a>
        </div>
        <div className="header-search">
          <a className="header__link" href="login">
            <FontAwesomeIcon icon={faSearch} className="header__icon" />
          </a>
        </div>
      </div>
    </header>
  );
};
