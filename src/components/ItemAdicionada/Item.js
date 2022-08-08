import style from './Item.module.css'
import Botao from '../Botao/Botao'
import iconExcluir from '../../imgs/icon-delete.svg'
import iconEditar from '../../imgs/icon-edit.svg'
import iconCheck from '../../imgs/icon-complete.svg'
import iconInCheck from '../../imgs/icone-desmarcado.svg'
import { useState } from 'react';

function Item() {
  const [ mostrarBtns, setMostrarbtns ] = useState(false)
  const [ confirmar, setConfirmar ] = useState(false)

  function handleMostrarBtns() {
    setMostrarbtns(!mostrarBtns)
  }

  function handleConfirmar() {
    setConfirmar(!confirmar)
  }

  return(
    <div className={style.container}>
      <div className={style.data}>
        <span>
          <span>21 </span>/ 
          <span> 11 </span>/ 
          <span> 2022</span>
        </span>
      </div>
      <button className={style.check} onClick={handleConfirmar}>
        {confirmar ? <img src={iconCheck} alt="" /> : <img src={iconInCheck} alt="" />}
      </button>
      <div className={style.conteudo}>
        <p>
         Mrs. Dursley, 
        </p>
      </div>
      <button className={style.mostrarBtns} onClick={handleMostrarBtns}>
        <span></span> 
        <span></span>
        <span></span>
      </button>
      <div className={`${style.btns} ${mostrarBtns ? style.aberto : style.fechado}`}>
        <Botao texto="Editar" icone={iconEditar} customClass="editar"/>
        <Botao texto="Excluir" icone={iconExcluir} customClass="excluir"/>
      </div>
    </div>
  )
}

export default Item