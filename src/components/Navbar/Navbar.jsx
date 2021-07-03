import React from "react";


const Navbar = (props) => {
   return (
      <nav>
          <h1> TIENDA {props.nombreDeLaTienda} </h1>
          <h2> {props.subtitulo}  </h2>
          <ul>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>
      </nav>
   )
}

export default Navbar