import React, { useState } from "react";
import about from "./About.module.css";
import Order from "../../components/Order/Order";

const About = () => {
  const [openOrder, setOpenOrder] = useState(false);

  return (
    <>
      <div className={about.section} id="about">
        <div className={about.container}>
          <h2 className={about.mainText}>INTRACOM</h2>
          <p className={about.text}>
            Компания <span className={about.intra}>ИНТРАКОМ</span> – вашего
            надежного партнера в мире информационных технологий. Мы
            специализируемся на предоставлении полного спектра IT-услуг, чтобы
            удовлетворить все ваши потребности в области информационных
            технологий. Наша компания предоставляет экспертное сопровождение в
            следующих направлениях:
          </p>
          <ol className={about.list}>
            <li className={about.item}>
              Поставки серверного оборудования: Мы предлагаем широкий выбор
              серверных решений, обеспечивая надежность и производительность для
              вашего бизнеса.
            </li>
            <li className={about.item}>
              Построение, оптимизация и виртуализация IT-инфраструктуры: Наши
              специалисты помогут вам создать и оптимизировать
              IT-инфраструктуру, чтобы ваш бизнес работал более эффективно и
              экономично.
            </li>
            <li className={about.item}>
              Информационная безопасность: Мы обеспечиваем защиту вашей
              информации и бизнеса с помощью передовых решений в области
              информационной безопасности.
            </li>
          </ol>
          <p className={about.textUnder}>
            Мы стремимся к высочайшему качеству обслуживания наших клиентов и
            гордимся нашими знаниями и опытом. Наша цель - помочь вам достичь
            ваших бизнес-целей, предоставив инновационные решения в мире
            информационных технологий. Спасибо за то, что выбрали{" "}
            <span className={about.intra}>ИНТРАКОМ</span>. Мы готовы помочь вам
            на каждом этапе вашего IT-путешествия.
          </p>
          <button
            onClick={(e) => setOpenOrder(true)}
            className={about.consultBtn}
          >
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </button>
        </div>
        <Order open={openOrder} onClose={() => setOpenOrder(false)} />
      </div>
    </>
  );
};

export default About;
