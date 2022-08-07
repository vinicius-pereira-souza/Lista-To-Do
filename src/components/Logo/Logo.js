import style from './Logo.module.css'
import logo from '../../imgs/To-Do List.svg'

function Logo() {
  return(
    <div className={style.logo}>
      <img src={logo} alt="imagem do logo" />
    </div>
  )
}

export default Logo