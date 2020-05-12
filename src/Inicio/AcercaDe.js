import React from "react";
import MenuSuperior from "../Compartida/MenuSuperior";
import Pie from "../Compartida/Pie";

export default function AcercaDe() {
  return (
    <React.Fragment>
      <MenuSuperior></MenuSuperior>
        
      <Informacion></Informacion>  

      <Pie></Pie>
    </React.Fragment>
  );
}
