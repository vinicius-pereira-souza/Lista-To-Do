import style from './Item.module.css'
import { useState } from 'react';
import Mensagem from './../Mesagem/Mensagem';

function Item() {
  const [ aparecer, setAparecer ] = useState(false)
  const [ mensagem, setMensagem ] = useState(false)

  function mostrarBotoes() {
    setAparecer(!aparecer)
  }

  // function ExcluirItem() {
  //   setMensagem(true)
  // }

  return (
    <div className={style.contianer}>
      {mensagem && <Mensagem/>}
      <span className={style.data}>21 / 11 / 2022</span>
      <button className={style.check}></button>
      <div className={style.conteudo}>
        <p>
          Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex itens ao invés de cada um dos valores separados. Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex itens ao invés de cada um dos valores separados. Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex itens ao invés de cada um dos valores separados.
        </p>
      </div>
      <button onClick={mostrarBotoes} className={style.btn}>
        <span className={style.circle}></span>
        <span className={style.circle}></span>
        <span className={style.circle}></span>
      </button>
      {aparecer && (
        <div className={`${style.btns} ${style.mostrar}`}>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      )}

    </div>
  )
}

export default Item