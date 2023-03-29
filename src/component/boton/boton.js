import React from "react";
import './boton.css'

function Boton({tipo , manejarClick}){
    return (
        <button
            className={ tipo === 'Click' ? 'boton-click' : 'boton-reiniciar' }
            onClick={manejarClick}>
            {tipo}
        </button>
    )
}

export default Boton;