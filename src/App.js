import styles from './App.module.css'
import Form from './components/Form';
import Logo from './components/Logo';
import { useEffect, useState } from 'react';
// import Lista from './components/Lista';
import Item from './components/Item';

function App() {
  const [objDatas, setObjDatas] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/lista_itens', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
    .then(resposta => {
      setObjDatas(resposta)
    }).catch(err => console.log(err))
  }, [])

  function enviarItem(item) {
    const hj =  new Date()

    item.data = {
      dia: hj.getDate(),
      mes: hj.getMonth() + 1, 
      ano: hj.getFullYear
    }

    fetch('http://localhost:5000/lista_itens', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(item)
    }).then(resp => resp.json())
    .then(retorno => {
      setObjDatas(retorno)
    }).catch(err => console.log(err))
  }

  return (
    <main className={styles}>
      <Logo/>
      <Form handleSubmit={enviarItem}/>
    </main>
  );
}

export default App;
