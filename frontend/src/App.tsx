import NavBar from './components/NavBar'
import './App.css'
import PlayerSeasonsTable from './components/PlayerSeasonsTable'
import type PlayerSeason from './types/PlayerSeason'
import GuessingGame from './components/GuessingGame'


function App() {

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        <GuessingGame/>
      </div>
    </>
  )
}

export default App
