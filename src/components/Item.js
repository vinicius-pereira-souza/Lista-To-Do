import style from './Item.module.css'
import lapis from '../imgs/icon-edit.svg'
import lixeira from '../imgs/icon-delete.svg'
import { useState, useEffect } from 'react';

function Item({dados}) {
  return(
    <main className={style.continer}>
      {dados && (
        <>
          <div className={style.dataCheck}>
            <span>{
              `${dados.dataDaPostagem.dia} / 
              ${dados.dataDaPostagem.mes} / 
              ${dados.dataDaPostagem.ano}
              `
            }</span>
            <input type="checkbox" />
          </div>
          <div className={style.conteudo}>
            <p>{dados.conteudo}</p>
          </div>
          <button className={style.mostrarBtns}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={style.botoes}>
            <button className={style.editar}>
              <img src={lapis} alt="" />
              Editar
            </button>
            <button className={style.excluir}>
              <img src={lixeira} alt="" />
              Excluir
            </button>
          </div>
        </>
      )}


          
    </main>
  )
}

export default Item