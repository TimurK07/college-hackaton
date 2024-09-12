import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="register__container container">
        <h1 className="register__title">Регистрация</h1>
        <div className="register__input input__two">
          <div className="input__register">
            <div className="input__wrapper">
              <div>
                <p className="input__text">Название команды</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Учебное заведение</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper input">  
              <div>
                <p className="input__text">ФИО капитана</p>
                <input className="input" type="text" />
              </div>
              <div>
                <p className="input__text">Номер телефона капитана</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Название команды</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email капитана</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper input">
              <div>
                <p className="input__text">ФИО участника</p>
                <input className="input" type="text" />
              </div>
              <div>
                <p className="input__text">Номер телефона участника</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email участника</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper input">
              <div>
                <p className="input__text">ФИО участника</p>
                <input className="input" type="text" />
              </div>
              <div>
                <p className="input__text">Номер телефона участника</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email участника</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper input">
              <div>
                <p className="input__text">ФИО участника</p>
                <input className="input" type="text" />
              </div>
              <div>
                <p className="input__text">Номер телефона участника</p>
                <input className="input" type="text" />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email участника</p>
                <input className="input" type="text" />
              </div>
            </div>
          </div>
          <button className='register__button'>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
