import Botao from '../Botao/Botao'
import style from './Filtro.module.css'
import { useState } from 'react';

function Filtro() {

  const [ mostrarBtns, setMostrarBtns ] = useState(false)

  function handleMostrarBtns() {
    setMostrarBtns(!mostrarBtns)
  }

  return(
    <div className={`${style.container}`}>
      <div className={`${style.btnsContainer} ${mostrarBtns ? style.aberto : undefined }`}>
        <Botao customClass="filtro" texto="Todos" />
        <Botao customClass="filtro" texto="Completos" />
        <Botao customClass="filtro" texto="Incompleto" />
      </div>
      <button onClick={handleMostrarBtns}>Filtro</button>
    </div>
  )
} 

export default Filtro