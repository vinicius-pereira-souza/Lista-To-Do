import './App.css'
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import Filtro from './components/Filtro/Filtro';
import Container from './components/Container/Container';
import Item from './components/ItemAdicionada/Item';

function App() {

  return (
    <div>
      <Logo />
      <Form />
      <Container customClass="containerMin">
        <Filtro />
      </Container>
      <Container customClass="containerMax">
        <Item />
      </Container>
      
    </div>
  );
}

export default App;
