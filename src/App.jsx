import { useState } from 'react'
import Navbar from './components/Navbar'
import Aviso from './components/Aviso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Aviso />
    </>
  )
}

export default App
