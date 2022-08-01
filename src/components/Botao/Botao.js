import style from './Botao.module.css'

function Botao({texto, acao}) {
  return <button onClick={acao} className={`${style.btn}`}>{texto}</button>
}

export default Botao