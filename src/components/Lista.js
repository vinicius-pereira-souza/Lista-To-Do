import Item from './Item'
import styles from './Lista.module.css'

function Container({content}) {
  return (
    <div className={styles.ListaContainer}>
      <Item/>
      {console.log(content)}
    </div>
  )
}
export default Container