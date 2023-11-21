import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import { useState } from 'react'



function App() {
  let winner = null;
  const [active, setactivePlayer] = useState('X')


  function handleSelectSquare() {
    setactivePlayer((currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X'))
  }
  return <main>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player name="Player 1" symbol="X" isActive={active === 'X'} />
        <Player name="Player 2" symbol="O" isActive={active === 'O'} />
      </ol>
      < GameBoard onSelectSquare={handleSelectSquare} activeplayersymbol={active}></GameBoard>
      {winner && <p>You won, {winner}!</p>}

    </div>
    LOG
  </main >


}

export default App
