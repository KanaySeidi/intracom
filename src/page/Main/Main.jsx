import React, { useState } from "react";
import main from "./Main.module.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Parnter from "../Partner/Parnter";
import Service from "../Service/Service";
import Modal from "../../components/Modal/Modal";
import video from "../../assets/video/mainVideo.mp4";

const Main = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <div className={main.section} id="main">
        <video className={main.video} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <About />
        <Service />
        <Parnter />
        <Contact />
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
};

export default Main;
