import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import style from "./CardColor.module.css";

const CardColor = ({ title2, text2, img, color }) => {
  AOS.init();

  return (
    <Link to="/servicios">
      <div className={style.container} style={{ backgroundColor: color }}>
        <img data-aos="zoom-in" src={img} alt="icono" />
        <h2 data-aos="fade-left">{title2}</h2>
        <h4 data-aos="fade-in">{title2}</h4>
        <div className={style.text}>
          <p>{text2}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardColor;
