import React from "react";

const colorRojo = {
    color: 'darkred'
};
class FormContacto extends React.Component{

    constructor(props){
        super(props)
        this.state= {
          nombre: '',
          correo: '',
          telefono: '',
          mensaje: '',
          info: ''
        }
    }

    actualizarNombre = (event) =>{
      this.setState({
        nombre: event.target.value
      })
    }

    actualizarCorreo = (event) =>{
      this.setState({
        correo: event.target.value
      })
    }

    actualizarTelefono = (event) =>{
      this.setState({
        telefono: event.target.value
      })
    }

    actualizarMensaje = (event) =>{
      this.setState({
        mensaje: event.target.value
      })
    }

    enviaDatos = (event) => {
      alert(`Datos recibidos en el POST del formulario:
      Nombre ${this.state.nombre}, Correo${this.state.correo}, 
      Telefono ${this.state.telefono}, Mensaje ${this.state.mensaje}
      `)
      this.setState({
        info: 'Gracias por contactarnos.',
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
      })
      event.preventDefault();
    }

    render() {
        return (
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 mb-5">
              <hr class="my-4" />
              <form method="POST" onSubmit={this.enviaDatos}>
                <div class="form-group row">
                  <label for="nombre" class="col-sm-2 col-form-label">
                    Nombre
                  </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="nombre" name="nombre" 
                    value={this.state.nombre}
                    onChange={this.actualizarNombre}/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="correo" class="col-sm-2 col-form-label">
                    Correo
                  </label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="correo" name="correo" 
                    value={this.state.correo}
                    onChange={this.actualizarCorreo}/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="telefono" class="col-sm-2 col-form-label">
                    Telefono
                  </label>
                  <div class="col-sm-10">
                    <input type="phone" class="form-control" id="telefono" name="telefono" 
                    value={this.state.telefono}
                    onChange={this.actualizarTelefono}/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="mensaje" class="col-sm-2 col-form-label">
                    Mensaje
                  </label>
                  <div class="col-sm-10">
                    <textarea type="text" class="form-control" id="mensaje" cols="5" name="mensaje" 
                    value={this.state.mensaje}
                    onChange={this.actualizarMensaje}>
                    </textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Enviar
                </button>
                <p style={colorRojo}>{this.state.info}</p>
              </form>
            </div>
          </div>
        );
      }
      
}

export default FormContacto;
