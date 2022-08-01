import Botao from '../Botao/Botao'
import style from './Form.module.css'
import { useState } from 'react';

function Form({handlePost}) {
  const [ item, setItem ] = useState({})
  const [ erro, setErro ] = useState(false)
  
  function handleChange(e) {
    setItem({...item, [e.target.name]: e.target.value})
    console.log(item.descricao)
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    if(item.descricao) {
      item.completo = false
      handlePost(item)
      setItem({})
      setErro(false)
    }

    if(!item.descricao) {
      setErro(!erro)
    }
  }

  return (
    <form className={style.formConainer}>
      <input type="text" 
        name="descricao"
        id="descricao"
        placeholder="Descricao"
        value={item.descricao || ''}
        onChange={handleChange}/>
        {erro && (
          <label className={style.erro}>Não é possivel adicionar com o campo vazio</label>
        )}
      <Botao acao={handleSubmit} texto="Adicionar"/>
    </form>
  )
}

export default Form