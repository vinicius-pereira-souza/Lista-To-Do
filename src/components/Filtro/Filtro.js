import Botao from '../Botao/Botao'
import style from './Filtro.module.css'
import { useState } from 'react';

function Filtro({acaoFilter}) {

  const [ mostrarBtns, setMostrarBtns ] = useState(false)

  function handleMostrarBtns() {
    setMostrarBtns(!mostrarBtns)
  }

  return(
    <div className={`${style.container}`}>
      <div className={`${style.btnsContainer} ${mostrarBtns ? style.aberto : undefined }`}>
        <Botao customClass="filtro" texto="Todos" acao={acaoFilter} id="todos"/>
        <Botao customClass="filtro" texto="Completos" acao={acaoFilter} id="completo"/>
        <Botao customClass="filtro" texto="Incompleto" acao={acaoFilter} id="incompleto"/>
      </div>
      <button onClick={handleMostrarBtns}>Filtro</button>
    </div>
  )
} 

export default Filtro