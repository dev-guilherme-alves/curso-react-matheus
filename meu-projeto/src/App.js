import { use } from 'react'
import './App.css'
import SeuNome from './components/SeuNome'

function App() {

  const [nome, seNome] = useState


  return (
    <div className='App'>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
      {nome}
    </div>
  )
}

export default App