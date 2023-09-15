import React from "react";
import cont from "./Contact.module.css";
import maps from "../../assets/img/maps.png";
import slogan from "../../assets/icon/slogan.png";

const Contact = () => {
  return (
    <>
      <div className={cont.section} id="contact">
        <div className={cont.container}>
          <div className={cont.director}>
            Болот Султаналиев <br />
            Директор ОсОО "Интраком" <br />
            Телефон: +996 (222) 667 776 <br />
            Почта: Intracom.kg@gmail.com <br />
            Адрес: Ул. Куйручук 22, Бишкек, Кыргызстан
          </div>
          <div className={cont.order}>
            <img src={slogan} alt="icon of slogan" />
          </div>
        </div>
        <div className={cont.maps}>
          <img className={cont.map} src={maps} alt="maps img" />
        </div>
      </div>
    </>
  );
};

export default Contact;
