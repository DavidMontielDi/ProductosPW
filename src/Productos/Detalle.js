import React from "react";
import MenuSuperior from "../Compartida/MenuSuperior";
import NavegacionLateral from "./NavegacionLateral";
import DetalleContenido from "./DetalleContenido";
import Pie from "../Compartida/Pie";

export default function Detalle() {
  return (
    <React.Fragment>
      <MenuSuperior></MenuSuperior>

      <div class="container">
        <div class="row">
          <NavegacionLateral></NavegacionLateral>
          <DetalleContenido></DetalleContenido>
        </div>
      </div>
      <Pie></Pie>
    </React.Fragment>
  );
}
