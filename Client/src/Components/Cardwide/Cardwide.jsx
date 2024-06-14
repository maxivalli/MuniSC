import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./Cardwide.module.css";

const Cardwide = ({ photo, title, link }) => {
  useEffect(() => {
    AOS.init({ delay: 0, duration: 800 });
  }, []);

  return (
    <div className={style.container} onClick={link}>
      <img
        data-aos="fade-up"
        src={photo}
        alt="imagen"
      />
      <div className={style.texto}>
        <h2 data-aos="zoom-out">{title}</h2>
      </div>
    </div>
  );
};

export default Cardwide;
