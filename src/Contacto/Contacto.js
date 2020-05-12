import React from "react";
import EncabezadoContacto from "./EncabezadoContacto";
import FormContacto from "./FormContacto";
import MenuSuperior from "../Compartida/MenuSuperior";
import Pie from "../Compartida/Pie";

export default function Detalle() {
  return (
    <React.Fragment>
      <MenuSuperior></MenuSuperior>
      <EncabezadoContacto></EncabezadoContacto>
      <FormContacto></FormContacto>
      <Pie></Pie>
    </React.Fragment>
  );
}
