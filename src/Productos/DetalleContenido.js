import React from "react";
import Opinion from "../Opiniones/Opinion";
import{
  withRouter
} from 'react-router-dom'

function opinionProducto(id, descripcion, autor, fecha) {
  return { id, descripcion, autor, fecha };
}

function itemProductoHome(id, img, nombre, precio, descripcion, ops) {
  return { id, img, nombre, precio, descripcion, ops };
}

const listaProductosOpiniones = [
  itemProductoHome(
    100,
    "http://placehold.it/900x400/FFA591",
    "Producto 1",
    "$50",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.",
    [
      opinionProducto(
        200,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget eros efficitur, laoreet urna vel, dapibus arcu. Cras mattis, felis ut congue consectetur, nisl massa fringilla mauris, in fringilla mauris tortor vitae massa. Vestibulum imperdiet dui ipsum, in interdum nulla fringilla ac.",
        "Luis",
        "22 de Abril de 2020"
      ),
      opinionProducto(
        201,
        "Sed ultrices leo eget odio porttitor tristique. Ut fringilla fermentum lorem. Mauris lobortis ligula eu scelerisque condimentum.",
        "Ana",
        "22 de Abril de 2020"
      )
    ]
  ),
  itemProductoHome(
    101,
    "http://placehold.it/900x400/91FFBC",
    "Producto 2",
    "$150",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.",
    [
      opinionProducto(
        202,
        "Nulla facilisi. Aliquam lobortis commodo arcu sed feugiat. Praesent pellentesque scelerisque hendrerit.",
        "Maria",
        "21 de Abril de 2020"
      ),
      opinionProducto(
        203,
        "Vestibulum viverra, nibh ut lacinia accumsan, risus mauris tristique metus, vitae faucibus mauris mi sed sem. Donec tempus, eros non sollicitudin imperdiet, orci nulla commodo nibh, quis porttitor lorem nibh quis nulla.",
        "David",
        "20 de Abril de 2020"
      )
    ]
  ),
  itemProductoHome(
    102,
    "http://placehold.it/900x400/91D7FF",
    "Producto 3",
    "$20",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.",
    [
      opinionProducto(
        204,
        "Donec suscipit ornare nibh, vitae hendrerit lectus sodales at. Morbi sollicitudin ex tincidunt cursus commodo. Maecenas finibus at tortor non ornare.",
        "Angel",
        "22 de Abril de 2020"
      ),
      opinionProducto(
        205,
        "Aenean imperdiet arcu vel pretium fringilla. Morbi quis sodales lacus, vel rutrum orci. Integer mollis mauris et efficitur eleifend. Phasellus dapibus a metus at tincidunt.",
        "Karla",
        "20 de Abril de 2020"
      )
    ]
  ),
  itemProductoHome(
    103,
    "http://placehold.it/900x400/B991FF",
    "Producto 4",
    "$200",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.",
    [
      opinionProducto(
        200,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget eros efficitur, laoreet urna vel, dapibus arcu. Cras mattis, felis ut congue consectetur, nisl massa fringilla mauris, in fringilla mauris tortor vitae massa. Vestibulum imperdiet dui ipsum, in interdum nulla fringilla ac.",
        "Luis",
        "22 de Abril de 2020"
      ),
      opinionProducto(
        201,
        "Sed ultrices leo eget odio porttitor tristique. Ut fringilla fermentum lorem. Mauris lobortis ligula eu scelerisque condimentum.",
        "Ana",
        "22 de Abril de 2020"
      )
    ]
  ),
  itemProductoHome(
    104,
    "http://placehold.it/900x400/FFF591",
    "Producto 5",
    "$100",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.",
    [
      opinionProducto(
        204,
        "Donec suscipit ornare nibh, vitae hendrerit lectus sodales at. Morbi sollicitudin ex tincidunt cursus commodo. Maecenas finibus at tortor non ornare.",
        "Angel",
        "22 de Abril de 2020"
      ),
      opinionProducto(
        205,
        "Aenean imperdiet arcu vel pretium fringilla. Morbi quis sodales lacus, vel rutrum orci. Integer mollis mauris et efficitur eleifend. Phasellus dapibus a metus at tincidunt.",
        "Karla",
        "20 de Abril de 2020"
      )
    ]
  ),
  itemProductoHome(
    105,
    "http://placehold.it/900x400/FD91FF",
    "Producto 6",
    "$75",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.",
    [
      opinionProducto(
        202,
        "Nulla facilisi. Aliquam lobortis commodo arcu sed feugiat. Praesent pellentesque scelerisque hendrerit.",
        "Maria",
        "21 de Abril de 2020"
      ),
      opinionProducto(
        203,
        "Vestibulum viverra, nibh ut lacinia accumsan, risus mauris tristique metus, vitae faucibus mauris mi sed sem. Donec tempus, eros non sollicitudin imperdiet, orci nulla commodo nibh, quis porttitor lorem nibh quis nulla.",
        "David",
        "20 de Abril de 2020"
      )
    ]
  ),
];



class Detalle extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      precio: "",
      descripcion: "",
      imagen : "",
      ops: [],
    };   
  }

  mostrarProducto(){
    listaProductosOpiniones.forEach((item) => {
      if(item.id = this.props.match.params.id){
        this.setState({
          nombre: item.nombre,
          precio: item.precio,
          descripcion: item.descripcion,
          imagen: item.img,
          ops: item.ops
        });
      }
    });
  }

  componentDidMount(){
    this.mostrarProducto();
  }

  render() {
    return (
      <div class="col-lg-9">
        <div class="card mt-4">
          <img
            class="card-img-top img-fluid"
            src={this.state.imagen}
            alt=""
          />
          <div class="card-body">
            <h3 class="card-title">{this.state.nombre}</h3>
            <h4>{this.state.precio}</h4>
            <p class="card-text">{this.state.descripcion}</p>
          </div>
        </div>

        <div class="card card-outline-secondary my-4">
          <div class="card-header">Opiniones del Producto</div>
          <div class="card-body">
            {(this.state.ops || []).map((item) => 
                  <Opinion datosOpinion={item}></Opinion>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detalle);
