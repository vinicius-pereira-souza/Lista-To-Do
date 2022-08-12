import style from './Botao.module.css'

function Botao({texto, acao, customClass, icone, id}) {
  return <button id={id}
    className={`${style.btn} ${style[customClass]}`} 
    onClick={acao}>
    {icone && <img src={icone} alt=""/>} {texto}
    </button>
}

export default Botao