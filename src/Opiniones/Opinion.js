import React from "react";

export default function Detalle(props) {
  return (
    <div>
      <p>
        {props.datosOpinion.descripcion}
      </p>
      <small class="text-muted">Publicado por {props.datosOpinion.autor} el {props.datosOpinion.fecha}</small>
      <hr />
    </div>
  );
}
