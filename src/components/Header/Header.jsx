import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <NavBar />
        <div className='header__content'>
          <div className='header__info'>
            <p className="header__text">7-8 ноября • г.Павлодар</p>
            <h1 className="header__title">
              Республиканский <br /> хакатон
            </h1>
            <button className="header__button btn__text">
              Зарегистрироваться
            </button>
          </div>
          <div className='header__satpaev-img'>
            <img src="./img/satpaev.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
