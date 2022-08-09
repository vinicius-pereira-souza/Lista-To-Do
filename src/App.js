import './App.css'
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import Filtro from './components/Filtro/Filtro';
import Item from './components/Item/Item';
import { useEffect, useState } from 'react';

function App() {
  const [ arrItens, setArrItens ] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/lista_itens', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
    .then(itens => {
      setArrItens(itens)
    }).catch(err => console.log(err))
  }, [])

  function adicionarItem(novoItem) {
    const dataAdicionado = new Date()

    novoItem.data = {
      dia: dataAdicionado.getDate(), 
      mes: dataAdicionado.getMonth() + 1, 
      ano: dataAdicionado.getFullYear()
    }

    fetch('http://localhost:5000/lista_itens', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        ...novoItem, completo: false
      })
    }).catch(err => console.log(err))
  }

  function handleDelete(item) {
    fetch(`http://localhost:5000/lista_itens/${item.id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(items => {
      console.log(items)
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <Logo />
      <Form handleAdicionar={adicionarItem} textoBtn="Adicionar"/>
      <Container customClass="flexEnd">
        <Filtro/>
      </Container>
      <Container>
        {arrItens.length > 0 && (
          arrItens.map((objDados) => (
            <Item key={objDados.id} dados={objDados} deletarItem={handleDelete}/>
          ))
        )}
      </Container>
    </div>
  );
}

export default App;
