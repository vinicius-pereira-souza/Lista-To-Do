import style from './Item.module.css'
import { useState } from 'react';
import Botao from '../Botao/Botao';

import lixeira from '../../imgs/icon-delete.svg'
import lapis from '../../imgs/icon-edit.svg'
import iconeCompleto from '../../imgs/icon-complete.svg'
import iconeIncompleto from '../../imgs/icone-desmarcado.svg'

function Item({dados}) {
  const [ mostrarBts, setMostrarBtns ] = useState(true)
  const [ completo, setCompleto ] = useState(false)
  const teste = true

  function handleMostrarBtns() {
    setMostrarBtns(!mostrarBts)
  }

  function handleCompleto() {
    setCompleto(!completo)
  }

  function deletarItem() {
    fetch(`http://localhost:5000/lista_itens/${dados.id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
    .then(item => console.log(item))
    .catch(err => console.log(err))
  }


  return(
    <>
      {teste && (
        <div className={style.container}>
          <div className={style.data}>
            <p>
              <span>{dados.data.dia}</span> / <span>{dados.data.mes}</span> / <span>{dados.data.ano}</span>
            </p>
          </div>
          <button className={style.btnCheck} onClick={handleCompleto}>
            {completo ? <img src={iconeCompleto} alt=""/> : <img src={iconeIncompleto} alt="" />}
          </button>
          <div className={style.conteudo}>
            <p>{dados.descricao}</p>
          </div>
          <button className={style.mostrarBtns} onClick={handleMostrarBtns}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`${mostrarBts && style.fechar} ${style.containerBtns}`}>
            <Botao texto="Editar" customClass="editar" icone={lapis} />
            <Botao texto="Excluir" customClass="excluir" icone={lixeira} acao={deletarItem}/>
          </div>
        </div>
      )}
    </>

  )
}

export default Item