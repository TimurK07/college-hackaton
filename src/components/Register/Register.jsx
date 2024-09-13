import { useState } from "react";
import "./Register.css";
import Modal from '../Modal/Modal';

function Register() {
  const initialFormState = {
    captainFio: "",
    captainFioPhone: "",
    captainFioEmail: "",
    participant1Fio: "",
    participant1Phone: "",
    participant1Email: "",
    participant2Fio: "",
    participant2Phone: "",
    participant2Email: "",
    participant3Fio: "",
    participant3Phone: "",
    participant3Email: "",
    education: "",
    city: "pavlodar",
    teamName: "",
  };

  const [formData, setFormData] = useState(initialFormState); 
  const [submitStatus, setSubmitStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("Отправка...");
    setModalOpen(true);

    fetch("https://hook.eu1.make.com/y47tnkxspzqfac2lkf6mxovjyyv66w51", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Ошибка сети");
        }
      })
      .then(() => {
        setSubmitStatus("Поздравляем! Заявка отправлена.");
        setFormData(initialFormState); 
      })
      .catch(() => {
        setSubmitStatus("Произошла ошибка при отправке формы.");
      })
      .finally(() => {
        setModalOpen(true);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="register" id="register">
      <div className="register__container container">
        <h1 className="register__title">Регистрация</h1>
        <form className="register__input input__two" onSubmit={handleSubmit}>
          <div className="input__register">
            <div className="input__wrapper ">
              <div>
                <p className="input__text">Название команды</p>
                <input
                  className="input"
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Учебное заведение</p>
                <input
                  className="input"
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input__wrapper input">
              <div>
                <p className="input__text">ФИО капитана</p>
                <input
                  className="input"
                  type="text"
                  name="captainFio"
                  value={formData.captainFio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p className="input__text">Номер телефона капитана</p>
                <input
                  className="input"
                  type="text"
                  name="captainFioPhone"
                  value={formData.captainFioPhone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email капитана</p>
                <input
                  className="input"
                  type="email"
                  name="captainFioEmail"
                  value={formData.captainFioEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            
            <div className="input__wrapper input">
              <div>
                <p className="input__text">ФИО участника 1</p>
                <input
                  className="input"
                  type="text"
                  name="participant1Fio"
                  value={formData.participant1Fio}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="input__text">Номер телефона участника 1</p>
                <input
                  className="input"
                  type="text"
                  name="participant1Phone"
                  value={formData.participant1Phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email участника 1</p>
                <input
                  className="input"
                  type="email"
                  name="participant1Email"
                  value={formData.participant1Email}
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <div className="input__wrapper input">
              <div>
                <p className="input__text">ФИО участника 2</p>
                <input
                  className="input"
                  type="text"
                  name="participant2Fio"
                  value={formData.participant2Fio}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="input__text">Номер телефона участника 2</p>
                <input
                  className="input"
                  type="text"
                  name="participant2Phone"
                  value={formData.participant2Phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email участника 2</p>
                <input
                  className="input"
                  type="email"
                  name="participant2Email"
                  value={formData.participant2Email}
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <div className="input__wrapper input">
              <div>
                <p className="input__text">ФИО участника 3</p>
                <input
                  className="input"
                  type="text"
                  name="participant3Fio"
                  value={formData.participant3Fio}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="input__text">Номер телефона участника 3</p>
                <input
                  className="input"
                  type="text"
                  name="participant3Phone"
                  value={formData.participant3Phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <p className="input__text">Email участника 3</p>
                <input
                  className="input"
                  type="email"
                  name="participant3Email"
                  value={formData.participant3Email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="register__button">
            Отправить
          </button>
        </form>
        <Modal isOpen={modalOpen} onClose={closeModal} message={submitStatus} />
      </div>
    </div>
  );
}

export default Register;
