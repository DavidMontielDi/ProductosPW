import React from "react";

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function ItemPie(props) {
  return (
    <div class="card-footer">
      
        <Link to={"/" + props.urlProducto} className="btn btn-primary">
          Ver Detalles
        </Link>
    </div>
  );
}
