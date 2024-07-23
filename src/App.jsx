import { useState } from 'react'
import './App.css'
import { Welcome } from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Welcome name="Carlo" age={34}></Welcome>
  )
}

export default App
