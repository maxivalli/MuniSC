import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cardwide from "../../Components/Cardwide/Cardwide";
import CardColor from "../../Components/CardColor/CardColor";
import CardNew from "../../Components/CardNew/CardNew";
import FooterHome from "../../Components/FooterHome/FooterHome";
import estancia from "../../assets/estancia.webp";
import video from "../../assets/backvideo.mp4";
import foto from "../../assets/fotos.jpg";
import tienda from "../../assets/TL-left.jpg";
import programa from "../../assets/programas.webp";
import turismo from "../../assets/turismo.jpeg";
import basura from "../../assets/basura.png";
import agua from "../../assets/agua.png";
import pasto from "../../assets/pasto.png";
import secretary from "../../assets/secretary.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
import n1 from "../../assets/n1.jpg";
import n2 from "../../assets/n2.jpg";
import n3 from "../../assets/n3.jpg";
import n4 from "../../assets/n4.jpg";
import style from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  AOS.init({ delay: 0, duration: 500 });

  const city = "San Cristóbal, Santa Fe";
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "1dd11f4b1385f11c989f1f0708f76436";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;
  const weather = weatherData?.weather;
  const iconUrl =
    weatherData && weatherData.weather
      ? `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      : "";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [apiUrl]);

  const residuos1 = (
    <>
      <h3>Lado OESTE</h3>
      <p>Lunes, miércoles, viernes</p>
      <br />
      <h3>Lado ESTE</h3>
      <p>Martes, jueves, sábado</p>
    </>
  );

  const agua1 = (
    <>
      <h3>LUNES A SÁBADO</h3>
      <p>De 8:00 a 14:00 hs.</p>
    </>
  );

  const atencion = (
    <>
      <h3>LUNES A VIERNES</h3>
      <p>De 8:00 a 13:00 hs.</p>
    </>
  );

  const face = () => {
    window.open("https://www.facebook.com/profile.php?id=100072630423432");
  };

  const insta = () => {
    window.open("https://www.instagram.com/municipalidadsc/");
  };

  const yout = () => {
    window.open("https://www.youtube.com/@MuniSanCristobal");
  };

  const what = () => {
    window.open("https://whatsapp.com/channel/0029VaFBthsCRs1qB6ZJBk3w");
  };

  const historiaLink = () => {
    navigate("/historia");
  };

  const fotosLink = () => {
    navigate("/galeria");
  };

  const comerciosLink = () => {
    window.open("https://www.tiendaslocales.com.ar");
  };

  const programasLink = () => {
    navigate("/programas");
  };

  const noticias = [
    {
      titulo:
        "JORNADA EDUCATIVA E INTERACTIVA EN EL DÍA MUNDIAL DE LA SEGURIDAD VIAL",
      imagen: n1,
    },
    {
      titulo:
        "CONTINUAMOS TEJIENDO LAZOS EN MIRAS DE POTENCIAR LA EDUCACIÓN, LA PRODUCCIÓN Y EL DESARROLLO DE NUESTRA CIUDAD",
      imagen: n2,
    },
    {
      titulo:
        "ACOMPAÑAMOS UNA GRATA JORNADA CONMEMORATIVA POR EL DÍA DE LA AFIRMACIÓN DE LOS DERECHOS SOBRE LAS ISLAS MALVINAS",
      imagen: n3,
    },
    {
      titulo:
        "SEMINARIO DE DANZAS NATIVAS ESTILIZADAS AL RITMO DE ALMAS GEMELAS",
      imagen: n4,
    },
  ];

  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <div className={style.intro}>
        {videoLoaded && (
          <>
            <h2>¡Bienvenidos a San Cristóbal!</h2>
            <label>▽</label>
          </>
        )}

        {!videoLoaded && (
          <>
            <div className={style.load}>
              <span className={style.loader}></span>
            </div>
          </>
        )}
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          style={{ display: videoLoaded ? "block" : "none" }}
        />
      </div>
      <div className={style.banner}>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          showArrows={false}
          interval={3000}
          stopOnHover={false}
          onClickItem={""}
        >
          {noticias.map((noticia, index) => (
            <CardNew
              key={index}
              titulo={noticia?.titulo}
              photo={noticia?.imagen}
            />
          ))}
        </Carousel>
      </div>
      <div className={style.home}>
        <div className={style.container}>
          <Cardwide
            photo={estancia}
            title={"Nuestra ciudad"}
            link={historiaLink}
          />
          <Cardwide photo={foto} title={"Galería"} link={fotosLink} />
          <Cardwide photo={programa} title={"Acciones"} link={programasLink} />
          <Cardwide photo={turismo} title={"Turismo"} link={programasLink} />
          <Cardwide
            photo={tienda}
            title={"Tiendas Locales"}
            link={comerciosLink}
          />
        </div>
        <div className={style.social}>
          <h2>Nuestras redes</h2>
          <div className={style.buttons}>
            <div data-aos="fade-up" className={style.button} onClick={face}>
              <img src={facebook} alt="facebook" />
              <p>Facebook</p>
            </div>
            <div data-aos="fade-up" className={style.button} onClick={insta}>
              <img src={instagram} alt="instagram" />
              <p>Instagram</p>
            </div>
            <div data-aos="fade-up" className={style.button} onClick={yout}>
              <img src={youtube} alt="youtube" />
              <p>YouTube</p>
            </div>
            <div data-aos="fade-up" className={style.button} onClick={what}>
              <img src={whatsapp} alt="whatsapp" />
              <p>Whatsapp</p>
            </div>
          </div>
        </div>
        <div className={style.weather}>
          <div className={style.info}>
            <img data-aos="fade-right" src={iconUrl} alt="" />
            <p data-aos="fade-in">{weatherData?.weather[0].description}</p>
            <h2>{Math.round(weatherData?.main.temp)}°</h2>
          </div>
        </div>
        <div className={style.container2}>
          <CardColor
            title2={"Residuos"}
            text2={residuos1}
            img={basura}
            color={"#f7b752"}
          />
          <CardColor
            title2={"Agua potable"}
            text2={agua1}
            img={agua}
            color={"#95c0de"}
          />
          <CardColor
            title2={"Recolección de ramas"}
            text2={residuos1}
            img={pasto}
            color={"#a7e58b"}
          />
          <CardColor
            title2={"Atención al público"}
            text2={atencion}
            img={secretary}
            color={"#ff6969"}
          />
        </div>
      </div>
      <FooterHome />
    </>
  );
};

export default Home;
