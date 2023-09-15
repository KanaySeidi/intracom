import React, { useState } from "react";
import foot from "./Footer.module.css";
import { Link } from "react-scroll";
import Order from "../Order/Order";

const Footer = () => {
  const [openOrder, setOpenOrder] = useState(false);

  return (
    <>
      <div className={foot.section}>
        <div className={foot.container}>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className={foot.item1}
          >
            ИНТРАКОМ
          </Link>

          <div className={foot.list}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={foot.item}
            >
              Кто мы
            </Link>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={foot.item}
            >
              Услуги
            </Link>
            <Link
              to="partner"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={foot.item}
            >
              Партнеры
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={foot.item}
            >
              Контакты
            </Link>
          </div>
          <button
            onClick={(e) => setOpenOrder(true)}
            className={foot.consultBtn}
          >
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </button>
        </div>
        <Order open={openOrder} onClose={() => setOpenOrder(false)} />
      </div>
    </>
  );
};

export default Footer;
