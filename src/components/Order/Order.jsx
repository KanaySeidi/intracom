import React from "react";
import mdl from "./Order.module.css";

const Order = ({ open, onClose }) => {
  const handleClose = () => {
    setTimeout(() => {
      alert("Вы успешно отправили данные");
      onClose();
    }, 2000);
  };

  if (!open) return null;
  return (
    <>
      <div className={mdl.section} onClick={onClose}>
        <div className={mdl.container}>
          <div className={mdl.box} onClick={(e) => e.stopPropagation()}>
            <div className={mdl.wrapper}>
              <p className={mdl.text}>
                Оставьте свои данные и наши менеджера с вами свяжуться
              </p>
            </div>
            <form className={mdl.form}>
              <input
                className={mdl.inp}
                type="text"
                placeholder="Введите имя"
              />
              <input
                className={mdl.inp}
                type="number"
                placeholder="Введите номер телефона"
              />
              <button
                onClick={handleClose}
                className={mdl.modalBtn}
                type="submit"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
