import React, { useState } from "react";
import head from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [container, setContainer] = useState(false);

  const setWhiteHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
      setContainer(true);
    } else {
      setHeader(false);
      setContainer(false);
    }
  };

  window.addEventListener("scroll", setWhiteHeader);

  return (
    <>
      <div className={`${head.section} ${header ? head.active : header}`}>
        <div
          className={`${head.container} ${container ? head.active : container}`}
        >
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={head.item}
          >
            ИНТРАКОМ
          </Link>

          <div className={head.list}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={head.item}
            >
              Кто мы
            </Link>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={head.item}
            >
              Услуги
            </Link>
            <Link
              to="partner"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={head.item}
            >
              Партнеры
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={head.item}
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
