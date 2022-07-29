import styles from './Form.module.css'
import { useState } from 'react'

function Form({handleSubmit}) {
  const [ item, setItem ] = useState({})

  function itemASerAdicionado(e) {
    setItem({...item, [e.target.name]: e.target.value})
  }

  function subimt(e) {
    e.preventDefault()
    handleSubmit(item) 
  }

  return (
    <form className={styles.formContainer} onSubmit={subimt}>
      <input 
        type="text" 
        name="valorItem" 
        id="valorItem" 
        value={item.name}
        placeholder="Descrição"
        onChange={itemASerAdicionado}
        />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default Form