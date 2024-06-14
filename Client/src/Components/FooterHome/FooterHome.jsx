import React from "react";
import CardSocial from "../CardSocial/CardSocial";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
import style from "./FooterHome.module.css";

const FooterHome = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <div className={style.left}>
          <p>CONTACTO</p>
          <h5>Correo: correo@ejemplo.com.ar</h5>
          <h5>Tel: 03408 - 411234</h5>
          <h5>Dirección: Av. Trabajadores Ferroviarios 1425</h5>
        </div>
        <div className={style.right}>
          <p>REDES</p>
          <CardSocial
            icon={facebook}
            title3={"Facebook"}
            link2={"https://www.facebook.com/profile.php?id=100072630423432"}
          />
          <CardSocial
            icon={instagram}
            title3={"Instagram"}
            link2={"https://www.instagram.com/municipalidadsc/"}
          />
          <CardSocial
            icon={youtube}
            title3={"YouTube"}
            link2={"https://www.youtube.com/@MuniSanCristobal"}
          />
          <CardSocial
            icon={whatsapp}
            title3={"Whatsapp"}
            link2={"https://whatsapp.com/channel/0029VaFBthsCRs1qB6ZJBk3w"}
          />
        </div>
        <div className={style.center}>
          <p>TELÉFONOS ÚTILES</p>
          <h5>Correo: correo@ejemplo.com.ar</h5>
          <h5>Tel: 03408 - 411234</h5>
          <h5>Dirección: Av. Trabajadores Ferroviarios 1425</h5>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
