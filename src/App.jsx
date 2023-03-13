import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Validation from './component/Validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Validation />
  )
}

export default App
