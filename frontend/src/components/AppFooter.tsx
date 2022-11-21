import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCalendar,
  faCircleExclamation,
  faDrum,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";

export const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer-nav__btn">
          <div className="footer-nav__icon">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <p className="footer-nav__text">캘린더</p>
        </div>
        <div className="footer-nav__btn">
          <div className="footer-nav__icon">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <p className="footer-nav__text">대관문의</p>
        </div>
        <div className="footer-nav__btn">
          <div className="footer-nav__icon">
            <FontAwesomeIcon icon={faDrum} />
          </div>
          <p className="footer-nav__text">대여문의</p>
        </div>
        <div className="footer-nav__btn">
          <div className="footer-nav__icon">
            <FontAwesomeIcon icon={faMoneyCheck} />
          </div>
          <p className="footer-nav__text">계약현황</p>
        </div>
        <div className="footer-nav__btn">
          <div className="footer-nav__icon">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="footer-nav__icon"
            />
          </div>
          <p className="footer-nav__text">업체정보</p>
        </div>
      </div>
    </footer>
  );
};
