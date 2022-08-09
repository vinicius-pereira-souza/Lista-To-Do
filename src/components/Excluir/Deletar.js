import Botao from '../Botao/Botao'
import style from './Deletar.module.css'

function Deletar({deletar, cancelar}) {
  return(
    <div className={style.container}>
      <p>Certeza que deseja deletar ?</p>
      <div className={style.btns}>
        <Botao texto="Excluir" customClass="excluir" acao={deletar}/>
        <Botao texto="Cancelar" customClass="editar" acao={cancelar}/>
      </div>
    </div>
  )
}

export default Deletar