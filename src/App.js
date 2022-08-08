import './App.css'
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import Filtro from './components/Filtro/Filtro';

function App() {

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
    </div>
  );
}

export default App;
