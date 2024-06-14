import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Noticias from "./Views/Noticias/Noticias";
import Gobierno from "./Views/Gobierno/Gobierno";
import Servicios from "./Views/Servicios/Servicios";
import Impuestos from "./Views/Impuestos/Impuestos";
import Contacto from "./Views/Contacto/Contacto";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/inicio"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/historia"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/galeria"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/programas"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/noticias"
        element={
          <>
            <Navbar />
            <Noticias />
          </>
        }
      />
      <Route
        path="/gobierno"
        element={
          <>
            <Navbar />
            <Gobierno />
          </>
        }
      />
      <Route
        path="/servicios"
        element={
          <>
            <Navbar />
            <Servicios />
          </>
        }
      />
      <Route
        path="/impuestos"
        element={
          <>
            <Navbar />
            <Impuestos />
          </>
        }
      />
      <Route
        path="/contacto"
        element={
          <>
            <Navbar />
            <Contacto />
          </>
        }
      />
    </Routes>
  );
}

export default App;
