import './App.css'
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import Filtro from './components/Filtro/Filtro';
import Item from './components/Item/Item';
import { useEffect, useState } from 'react';

function App() {
  const [ arrItem, setArrItem ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/lista_itens`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())
    .then(itens => {
      setArrItem(itens)
    }).catch(err => console.log(err))
  }, [])

  function handleAdicionarItem(item) {
    const dataPost = new Date()

    item.data = {
      dia: dataPost.getDate(),
      mes: dataPost.getMonth() + 1, 
      ano: dataPost.getFullYear()
    }
    item.completo = false

    fetch(`http://localhost:5000/lista_itens`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(item)
    })
    .then(item => item.json())
    .then(resp => {
      setArrItem([...arrItem, resp])
    })
    .catch(err => console.log(err))
  }

  function handleRemoveIten(id) {
    fetch(`http://localhost:5000/lista_itens/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      setArrItem(arrItem.filter(item => item.id !== id))
    })
    .catch(err => console.log(err))
  }

  function editarEDesativarFormEdit(itemAtual, itemEditado) {
    setArrItem(arrItem.map(obj => obj.id === itemAtual.id ? itemEditado : obj))
  } 

  return (
    <div>
      <Logo />
      <Form textoBtn="Adicionar" handleAdicionar={handleAdicionarItem}/>
      <Container customClass="flexEnd">
        <Filtro />
      </Container>
      <Container>
        {arrItem.length > 0 && (
          arrItem.map(itemDados => (
            <Item dados={itemDados} 
              key={itemDados.id} 
              handleRemove={handleRemoveIten} 
              handleEdit={editarEDesativarFormEdit}
            />
          ))
        )}
      </Container>
    </div>
  );
}

export default App;
