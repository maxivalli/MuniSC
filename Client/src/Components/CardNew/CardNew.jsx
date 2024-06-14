import React from "react";
import style from "./CardNew.module.css";

const CardNew = ({ titulo, photo }) => {
  return (
    <div className={style.new}>
      <img src={photo} alt="foto" />
      <div className={style.text}>
        <h3>{titulo}</h3>
      </div>
    </div>
  );
};

export default CardNew;
