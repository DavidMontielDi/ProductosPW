import React from "react";
const colorFondo = {
  background: 'darkred'
};

export default function Encabezado() {
  return (
    <header class="bg-primaryH py-5 mb-5">
      <div class="container h-100" >
        <div class="row h-100 align-items-center">
          <div class="col-lg-12">
            <h1 class="display-4 text-white mt-5 mb-2">
              Devz Store - David Montiel
            </h1>
            <p class="lead mb-5 text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              possimus ab labore provident mollitia. Id assumenda voluptate
              earum corporis facere quibusdam quisquam iste ipsa cumque unde
              nisi, totam quas ipsam.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
