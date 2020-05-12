import React from "react";
import ItemFoto from "./FragmentoProducto/ItemFoto";
import ItemContenido from "./FragmentoProducto/ItemContenido";
import ItemPie from "./FragmentoProducto/ItemPie";

export default function Producto(props) {
  return (
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <ItemFoto urlFoto={props.datosProducto.img}></ItemFoto>
        <ItemContenido
          nombre={props.datosProducto.nombre}
          precio={props.datosProducto.precio}
          descripcion={props.datosProducto.descripcion}
        />
        <ItemPie urlProducto={props.datosProducto.id}></ItemPie>
      </div>
    </div>
  );
}
