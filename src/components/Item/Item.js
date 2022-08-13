import style from './Item.module.css'
import { useState, useEffect } from 'react';
import Botao from '../Botao/Botao';

import lixeira from '../../imgs/icon-delete.svg'
import lapis from '../../imgs/icon-edit.svg'
import iconeCompleto from '../../imgs/icon-complete.svg'
import iconeIncompleto from '../../imgs/icone-desmarcado.svg'
import Deletar from './../Excluir/Deletar';
import FormEditar from '../FormEditar/FormEditar';

function Item({dados, handleRemove, handleEdit}) {
  const [ mostrarBts, setMostrarBtns ] = useState(true)

  const [ completo, setCompleto ] = useState(false)
  const [ deleteItem, setDeleteItem ] = useState(false)
  const [ editarItem, setIditarItem ] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/lista_itens/${dados.id}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())
    .then(item => {
      setCompleto(item.completo)
    }).catch(err => console.log(err))
  }, [dados.completo, dados.id])

  function handleMostrarBtns() {
    setMostrarBtns(!mostrarBts)
  }
  function handleCompleto() {
    setCompleto(!completo)
    toggleEditarCompleto(dados)
  }

  function toggleAbrirModalDelete() {
    setDeleteItem(true)
  }
  function toggleDesativaModalDelete() {
    setDeleteItem(false)
  }
  function btnDeletarItem() {
    handleRemove(dados.id)
  }

  function toggleAbrirModalEditar() {
    setIditarItem(true)
  }

  function toggleEditarCompleto(item) {
    fetch(`http://localhost:5000/lista_itens/${item.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        ...item, completo: !completo
      })
    })
    .then(() => {
      setIditarItem(false)
    })
    .catch(err => console.log(err))
  }

  function handleItemEditar(dados) {
    fetch(`http://localhost:5000/lista_itens/${dados.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({descricao: dados.descricao})
    })
    .then((resp) => resp.json())
    .then(item => {
      handleEdit(dados, item)
      setIditarItem(false)
    })
    .catch(err => console.log(err))
  }

  return(
    <>
      {dados && (
        <div className={style.container}>
          {deleteItem && <Deletar deletar={btnDeletarItem} cancelar={toggleDesativaModalDelete}/>}
          {editarItem && <FormEditar acao={handleItemEditar} valor={dados}/>}
          <div className={style.data}>
            <p>
              <span>{dados.data.dia}</span> / <span>{dados.data.mes}</span> / <span>{dados.data.ano}</span>
            </p>
          </div>
          <button className={style.btnCheck} onClick={handleCompleto}>
            {completo ? <img src={iconeCompleto} alt=""/> : <img src={iconeIncompleto} alt="" />}
          </button>
          <div className={style.conteudo}>
            <p>{dados.descricao}</p>
          </div>
          <button className={style.mostrarBtns} onClick={handleMostrarBtns}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`${mostrarBts && style.fechar} ${style.containerBtns}`}>
            <Botao texto="Editar" customClass="editar" icone={lapis} acao={toggleAbrirModalEditar}/>
            <Botao texto="Excluir" customClass="excluir" icone={lixeira} acao={toggleAbrirModalDelete}/>
          </div>
        </div>
      )}
    </>

  )
}

export default Item