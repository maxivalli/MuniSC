import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import back from "../../assets/Back.webp";
import logo from "../../assets/Logo.png";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();

  const inicio = () => {
    navigate("/inicio");
  };

  return (
    <div className={style.container}>
      <img src={logo} alt="logo" className={style.logo} />
      <img src={back} alt="back" className={style.back} />
      <h1>Municipalidad de San Cristóbal</h1>
      <button onClick={inicio}>{"Ingresar"}</button>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
