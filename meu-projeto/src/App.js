import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App(name, idade, profissao, foto) {
  const name = Ze

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <HelloWorld />
      <SayMyName nome={name}/>
      <Pessoa nome={name} idade={idade} profissao={profissao}/>
      <List />
    </div>
  );
}

export default App;
