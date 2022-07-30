import './App.css'
import { useEffect, useState } from 'react';

import Form from './components/Form';
import logo from './imgs/To-Do List.svg'
import Item from './components/Item';

function App() {
  const [ item, setItem ] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/lista_itens', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())
    .then(resp => {
      setItem(resp)
    }).catch(err => console.log(err))
  }, [item])

  function adicionarPost(it) {
    const hj = new Date()
    it.dataDaPostagem = {
      dia: hj.getDate(),
      mes: hj.getMonth() + 1, 
      ano: hj.getFullYear()
    }

    fetch('http://localhost:5000/lista_itens', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(it)
    }).then(r => r.json())
    .then(resp => {
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <img className='logo' src={logo} alt="imagem do logo" />
      <main className='container'>
        <Form handleSubmit={adicionarPost}/>
        {item && (
          item.map(obj => (
            <Item key={obj.id} dados={obj}/>
          ))
        )}
      </main>
    </div>
  );
}

export default App;
