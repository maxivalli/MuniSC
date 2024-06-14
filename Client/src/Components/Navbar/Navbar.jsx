import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import home from "../../assets/home.png";
import news from "../../assets/news.png";
import gobierno from "../../assets/gobierno.png";
import grifo from "../../assets/grifo.png";
import tax from "../../assets/tax.png";
import menu from "../../assets/menu.png";
import style from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const inicio = () => {
    navigate("/inicio");
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {openMenu && (
        <>
          <div className={style.back} onClick={handleMenu}></div>
          <div className={style.menu}>
            <button>Turismo</button>
            <button>Transparencia</button>
            <button>Trabajo</button>
            <button>Agenda eventos</button>
            <button>Teléfonos útiles</button>
            <button className={style.lastButton}>Contancto</button>
          </div>
        </>
      )}
      <div className={style.mobile}></div>
      <div className={style.container}>
        <div className={style.logo} onClick={inicio}>
          <img src={logo} alt="logo" />
          <p>Municipalidad de San Cristóbal</p>
        </div>

        <div className={style.buttons}>
          <Link to="/inicio">
            <div className={style.button}>
              <img src={home} alt="home" width={28} height={28} />
              <p>Principal</p>
            </div>
          </Link>

          <Link to="/noticias">
            <div className={style.button}>
              <img src={news} alt="news" width={28} height={28} />
              <p>Noticias</p>
            </div>
          </Link>

          <Link to="/gobierno">
            <div className={style.button}>
              <img src={gobierno} alt="gobierno" width={28} height={28} />
              <p>Gobierno</p>
            </div>
          </Link>

          <Link to="/servicios">
            <div className={style.button}>
              <img src={grifo} alt="servicios" width={28} height={28} />
              <p>Servicios</p>
            </div>
          </Link>

          <Link to="/impuestos">
            <div className={style.button}>
              <img src={tax} alt="impuestos" width={28} height={28} />
              <p>Trámites</p>
            </div>
          </Link>

          <div className={style.button} onClick={handleMenu}>
            <img src={menu} alt="menú" width={28} height={28} />
            <p>Menú</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
