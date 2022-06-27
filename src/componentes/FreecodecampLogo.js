import React from "react";
import freecodecamp_logo from'../img/freecodecamp_logo.png'
import '../hojas-de-estilo/FreecodecampLogo.css'
  function FreecodecampLogo(){
    return(
      <div className='freecodecamp-contenedor-logo'>
        <img 
          className='freecodecamp-logo'
          src={freecodecamp_logo}
          alt=' Logo freeCodeCamp'
/>
      </div>
    )
  }

  export default FreecodecampLogo;