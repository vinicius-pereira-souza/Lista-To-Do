import styles from './Item.module.css'
import icon_edit from '../imgs/icon-edit.svg'
import icon_delete from '../imgs/icon-delete.svg'
import { useState } from 'react';

function Item({obj}) {
  const [ abrir, setAbrir ] = useState(false)

  function mostrarBts() {
    setAbrir(!abrir)
  }
  console.log(obj)
  return (
    <main className={styles.ListaContainer}>
      <span className={styles.data}>
        {`${obj.dataDoEnvio.dia} / ${obj.dataDoEnvio.mes} / ${obj.dataDoEnvio.ano}`}
      </span>
      <button className={styles.checar}></button>
      <div className={styles.conteudo}>
        <p>
          {obj.valorItem}
        </p>
      </div>
      <button className={styles.mostrarBtns} onClick={mostrarBts}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {abrir && (
        <div className={`${styles.btns} ${styles.abrir}`}>
          <button className={styles.editar}>
            <img src={icon_edit} alt="icone de lapis" />
            Editar
          </button>
          <button className={styles.excluir}>
            <img src={icon_delete} alt="icone de lixeira" />
            Deletar
          </button>
        </div>
      )}
      <div className={styles.btns}>
        <button className={styles.editar}>
          <img src={icon_edit} alt="icone de lapis" />
          Editar
        </button>
        <button className={styles.excluir}>
          <img src={icon_delete} alt="icone de lixeira" />
          Deletar
        </button>
      </div>
    </main>
  )
}

export default Item