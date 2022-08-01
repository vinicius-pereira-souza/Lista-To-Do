import style from './Mensagem.module.css'

function Mensagem() {
  return (
    <div className={style.container}>
      <p>Tem certeza que deseja excluir ?</p>
      <div className={style.btns}>
        <button>Excluir</button>
        <button>Cancelar</button>
      </div>
    </div>
  )
}

export default Mensagem