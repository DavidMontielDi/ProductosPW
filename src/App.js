import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuSuperior from "./Compartida/MenuSuperior";
import Encabezado from "./Inicio/Encabezado";
import LoQueHacemos from "./Inicio/LoQueHacemos";
import Contactanos from "./Inicio/Contactanos";
import Producto from "./Inicio/Producto";
import Pie from "./Compartida/Pie";
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Detalle from "./Productos/Detalle";
import AcercaDe from "./Opiniones/AcercaDe";
import Contacto from "./Contacto/Contacto"

function itemProductoHome(id, img, nombre, precio, descripcion) {
  return { id, img, nombre, precio, descripcion };
}

const listaProductosHome = [
  itemProductoHome(
    100,
    "http://placehold.it/300x200",
    "Producto 1",
    "$50",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus."
  ),
  itemProductoHome(
    101,
    "http://placehold.it/300x200",
    "Producto 2",
    "$150",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus."
  ),
  itemProductoHome(
    102,
    "http://placehold.it/300x200",
    "Producto 3",
    "$20",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus."
  ),
  itemProductoHome(
    103,
    "http://placehold.it/300x200",
    "Producto 4",
    "$200",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus."
  ),
  itemProductoHome(
    104,
    "http://placehold.it/300x200",
    "Producto 5",
    "$100",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus."
  ),
  itemProductoHome(
    105,
    "http://placehold.it/300x200",
    "Producto 6",
    "$75",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus."
  ),
];

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact children={<Inicio/>} />
          <Route path="/Contacto" exact children={<Contacto/>}/>
          <Route path="/AcercaDe" exact children={<AcercaDe/>}/>
          <Route path="/:id" component={Detalle}  />
        </Switch>
      </Router>
  );
}

function Inicio(){
  return(
    <div className="App">
        <MenuSuperior></MenuSuperior>
        <Encabezado></Encabezado>
        <div class="container">
          <div class="row">
            <LoQueHacemos></LoQueHacemos>
            <Contactanos></Contactanos>
          </div>

          <div class="row">
            {listaProductosHome.map((item) => (
              <Producto datosProducto={item}></Producto>
            ))}
          </div>
          
        </div>
        <Pie></Pie>
      </div>
  )
}


