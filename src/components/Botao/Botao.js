import style from './Botao.module.css'

function Botao({texto, acao, customClass, icone}) {
  return <button 
    className={`${style.btn} ${style[customClass]}`} 
    onClick={acao}>
    {icone && <img src={icone} alt=""/>} {texto}
    </button>
}

export default Botao