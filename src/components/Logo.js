import logo from '../imgs/To-Do List.svg'
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Imagem do Logo"/>
    </div>
  )
}

export default Logo