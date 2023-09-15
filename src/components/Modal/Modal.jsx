import React from "react";
import mdl from "./Modal.module.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className={mdl.section}>
        <div className={mdl.container}>
          <div className={mdl.txt}>
            В современном мире, который стремительно развивается и постоянно
            меняется, важно иметь надежного партнера, который поможет вам
            справиться с вызовами и сделать ваш бизнес более
            конкурентоспособным.
          </div>    
          <div className={mdl.txt2}>
            В этой быстро растущей среде, мы, в{" "}
            <span className={mdl.intra}>Интраком</span>, гордимся тем, что можем
            облегчить вашу жизнь и бизнес. Мы специализируемся на создании
            инновационных IT-решений и предоставлении надежных услуг, которые
            помогут вам оптимизировать вашу инфраструктуру, обеспечить
            информационную безопасность и поддержать ваш рост.
          </div>
          <div className={mdl.txt3}>
            С нами, вы можете быть уверены, что ваш бизнес будет готов к вызовам
            будущего. Доверьтесь <span className={mdl.intra}>Интраком</span> и
            давайте сделаем вашу дорогу к успеху более простой и безопасной.
          </div>
          <button className={mdl.btn} onClick={onClose}>
            ИНТРАКОМ
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
