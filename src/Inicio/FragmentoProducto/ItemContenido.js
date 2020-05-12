import React from "react";

export default function ItemContenido(props) {
  return (
    <div class="card-body">
      <h4 class="card-title">{props.nombre}</h4>
      <h5 class="card-title">{props.precio}</h5>
      <p class="card-text">
        {props.descripcion}
      </p>
    </div>
  );
}
