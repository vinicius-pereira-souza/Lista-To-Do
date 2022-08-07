import style from './Form.module.css'
import { useState } from 'react';
import Botao from './../Botao/Botao';

function Form() {
  const [ item, setItem ] = useState({})
  const [ erroMsg, setErroMsg ] = useState(false)

  function handleChange(e) {
    setItem({...item, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(item.descricao) {
      console.log(item.descricao)
      item.descricao = ''
      setErroMsg(false)
    } else {
      setErroMsg(true)
    }
  }

  return (
    <form className={style.formContainer}>
      <input type="text" 
        name="descricao" 
        id="descricao"
        placeholder="Descrição"
        value={item.descricao}
        onChange={handleChange}
        className={erroMsg && style.erro}
      />
      {erroMsg && <label>O campo não pode estar vazio</label>}
      <Botao texto="Adicionar" acao={handleSubmit} customClass="adicionar"/>
    </form>
  )

}

export default Form