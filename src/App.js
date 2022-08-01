import './App.css'
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import { useState, useEffect } from 'react';
import Mensagem from './components/Mesagem/Mensagem';
import Container from './components/ContainerExterno/Container';
import Filtro from './components/Filtro/Filtro';
import Item from './components/Item/Item';

function App() {
  const [ arrItem, setArrItem ] = useState([])

  function adicionarPost(item) {
    const hj = new Date()
    item.data = {
      dia: hj.getDate(), 
      mes: hj.getMonth() + 1, 
      ano: hj.getFullYear()
    }

    fetch('http://localhost:5000/lista_itens', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(item)
    }).then(r => r.json())
    .then(resp => {
      console.log(resp)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    fetch('http://localhost:5000/lista_itens', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(arr => {
      setArrItem(arr)
      console.log(arr)
    }).catch(err => console.log(err))
  }, [])

  function filtroOpcoes(btn) {
    console.log(btn)
  }

  return (
    <div>
      <Logo/>
      <Form handlePost={adicionarPost}/>
      <Container>
        <Filtro filtrar={filtroOpcoes}/>
        <Item/>
      </Container>
    </div>
  );
}

export default App;
