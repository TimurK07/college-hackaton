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
          <div className="header__info">
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
            {/* <div className='header__two__title'>
              <p>к 125-летию Каныша Сатпаева и дню цифровизации</p>
              <div className='hedaer__time'>
                  <div className='header__time__info'>
                    <sapn>24</sapn>
                    <sapn>дней</sapn>
                  </div>
                  <div className='header__time__info'>
                    <sapn>24</sapn>
                    <sapn>дней</sapn>
                  </div>
                  <div className='header__time__info'>
                    <sapn>24</sapn>
                    <sapn>дней</sapn>
                  </div>
                  <div className='header__time__info'>
                    <sapn>24</sapn>
                    <sapn>дней</sapn>
                  </div>
                  <div className='header__time__info'>
                    <sapn>24</sapn>
                    <sapn>дней</sapn>
                  </div>
              </div>
            </div> */}
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
