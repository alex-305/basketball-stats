import { useState } from 'react'
import NavBar from './components/NavBar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ count, setCount ] = useState(1)

  return (
    <>
      <NavBar/>
      <button onClick={() => setCount(count+1)}>{count}</button>
    </>
  )
}

export default App
