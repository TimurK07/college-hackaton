import NavBar from "../NavBar/NavBar";
import "./Header.css";
import HeaderBg from "../../img/satpaev.png";
import Countdown from '../CountDown/CountDown';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <NavBar />
        <div className="header__content">
          <div className="header__info header__info__desk">
            <p className="header__text">7-8 ноября • г.Павлодар</p>
            <h1 className="header__title">
              Республиканский <br /> хакатон
              <a href="#register" >
              <button className="header__button btn__text">
                Зарегистрироваться
              </button>
            </a>
            </h1>
            <Countdown/>  
          </div>
          <div className="header__info header__info__mobile">
            <p className="header__text">7-8 ноября • г.Павлодар</p>
            <h1 className="header__title">
              Республиканский <br /> хакатон
            </h1>
            <Countdown/> 
            <a href="#register" >
              <button className="header__button btn__text">
                Зарегистрироваться
              </button>
            </a> 
          </div>
          <div className="header__satpaev-img">
            <img src={HeaderBg} alt="logo " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
