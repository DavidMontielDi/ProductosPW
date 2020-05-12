import React from "react";

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default function MenuSuperior() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          Ejercicio Programacion Web
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Inicio
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <Link to={"/AcercaDe"} >
                  <a class="nav-link" href="#">
                    Acerca De
                  </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Productos
              </a>
            </li>
            <li class="nav-item">
              <Link to={"/Contacto"}>
                <a class="nav-link" href="#">
                  Contacto
                </a>
              </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
