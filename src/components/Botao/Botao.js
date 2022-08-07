import style from './Botao.module.css'

function Botao({texto, acao, customClass}) {
  return <button 
    className={`${style.btn} ${style[customClass]}`} 
    onClick={acao}>
      {texto}
    </button>
}

export default Botao