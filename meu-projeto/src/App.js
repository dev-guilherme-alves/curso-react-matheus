import './App.css'
import OutraList from './components/OutraList'

function App() {

  const meuItens = ['React', 'Vue', 'Angular']

  return (
    <div className='App'>
      <h1>Renderizando Listas</h1>
      <OutraList itens={meusItens}/>
    </div>
  )
}

export default App