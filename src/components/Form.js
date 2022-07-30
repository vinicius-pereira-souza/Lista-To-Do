import style from './Form.module.css'
import { useState } from 'react';

function Form ({handleSubmit}) {
  const [ item, setItem ] = useState({})

  function conteudo(e) {
    setItem({...item, [e.target.name]: e.target.value})
  } 

  function submitForm(e) {
    e.preventDefault()
    handleSubmit(item)
  }

  return(
    <form className={style.formContainer}>
      <input 
        type="text" 
        name="conteudo" 
        id="conteudo"
        placeholder='Descrição'
        onChange={conteudo}
        value={item.name}/>
      <button type="submit" onClick={submitForm}>Adicionar</button>
    </form>
  )
}

export default Form