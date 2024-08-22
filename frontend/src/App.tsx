import NavBar from './components/NavBar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Players from './pages/Players'
import Teams from './pages/Teams'
import Player from './pages/Player'
import Team from './pages/Team'

function App() {

  return (
    <>
      <div>
        <NavBar/>
      </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/players" element={<Players/>}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path="/player/:id" element={<Player/>}/>
      <Route path="/team/:id" element={<Team/>}/>
    </Routes>
    </>
  )
}

export default App
