import style from './Filtro.module.css'
import Botao from './../Botao/Botao';
import { useState } from 'react';

function Filtro() {
  const [ aberto, setAberto ] = useState(false)

  function handleAbrirBtnsFiltro() {
    setAberto(!aberto)
  }

  return (
    <div className={style.container}>
      <div className={`${style.containerFitros} ${aberto ? style.aberto : style.fechado}`}>
        <Botao texto="Todos" customClass="filtro"/>
        <Botao texto="Completos" customClass="filtro"/>
        <Botao texto="Incompletos" customClass="filtro"/>
      </div>
      <button 
        onClick={handleAbrirBtnsFiltro} 
        className={style.btnFiltro}>
          Filtrar
      </button>
    </div>
  )
}

export default Filtro