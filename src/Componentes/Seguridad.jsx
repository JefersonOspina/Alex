import React from "react"
import "./Seguridad.css"
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import HowToRegIcon from '@material-ui/icons/HowToReg';

class Seguridad extends React.Component{
render(){
  return(
  <div className="seguridad">
    <div className="top">
    <img className="top__img" src="https://i.imgur.com/AKbT2g7.png" alt="" width="60" height="60"/>
    <h1 className="sobre-nosotros">
      Seguridad
    </h1>
    </div>
    <div className="opcion">
    <Button
        variant="contained"
        size="large"
        className="Boton"
        startIcon={<LockIcon />}
      >
        Cambiar contraseña
      </Button>
    </div>
    <div className="opcion">
    <Button
        variant="contained"
        size="large"
        className="Boton"
        startIcon={<HowToRegIcon />}
      >
        Privacidad
      </Button>
    </div>
  </div>
  )
}
}
export default Seguridad;