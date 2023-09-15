import React from "react";
import part from "./Partner.module.css";

const Parnter = () => {
  const partners = [
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
    "partner",
  ];

  return (
    <>
      <div className={part.section} id="partner">
        <div className={part.container}>
          <h2 className={part.mainText}>Партнеры</h2>
          <h3 className={part.text}>
            Мы гордимся нашими партнерскими отношениями и уверены, что
            сотрудничество - это ключ к успеху. Интраком устанавливает
            долгосрочные партнерские связи с лучшими компаниями и организациями
            в мире информационных технологий. Наши партнеры делятся нашей
            страстью к инновациям и качественному обслуживанию клиентов. Вместе
            мы создаем сильные команды, которые способны решать самые сложные
            задачи в мире технологий.
          </h3>
          <div className={part.box}>
            {partners.map((item, index) => (
              <div className={part.partner} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Parnter;
