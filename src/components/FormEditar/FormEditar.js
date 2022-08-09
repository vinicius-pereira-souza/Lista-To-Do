import style from './FormEditar.module.css'
import Form from './../Form/Form';

function FormEditar({acao, valor}) {
  return (
    <div className={style.container}>
      <Form textoBtn="Editar" handleAdicionar={acao} handleValue={valor}/>
    </div>
  )
}

export default FormEditar