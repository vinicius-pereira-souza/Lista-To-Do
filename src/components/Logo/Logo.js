import style from './Logo.module.css'
import img from '../../imgs/To-Do List.svg'

function Logo() {
  return (
    <div className={style.logo}>
      <img src={img} alt="imagem do logo" />
    </div>
  )
}

export default Logo