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
    fetch('http://localhost:5000/lista_itens', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
    .then(itemArr => {
      setArrItem(itemArr)
    }).catch(err => console.log(err))
  }, [arrItem])

  function adicionarItem(novoItem) {
    const dataAdicionado = new Date()

    novoItem.data = {
      dia: dataAdicionado.getDate(), 
      mes: dataAdicionado.getMonth() + 1, 
      ano: dataAdicionado.getFullYear()
    }
    novoItem.completo = false

    fetch('http://localhost:5000/lista_itens', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(novoItem)
    })
  }

  return (
    <div>
      <Logo />
      <Form handleAdicionar={adicionarItem}/>
      <Container customClass="flexEnd">
        <Filtro/>
      </Container>
      <Container>
        {arrItem && arrItem.map((obj) => (
          <Item key={obj.id} dados={obj}/> 
        ))}
      </Container>
    </div>
  );
}

export default App;
