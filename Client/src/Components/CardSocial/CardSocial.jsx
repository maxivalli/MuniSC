import React from "react";
import style from "./CardSocial.module.css";

const CardSocial = ({ icon, title3, link2}) => {
  return (
    <a href={link2} target="blank">
      <div className={style.container} >
        <img src={icon} alt="icon"/>
        <p>{title3}</p>
      </div>
    </a>
  );
};

export default CardSocial;
