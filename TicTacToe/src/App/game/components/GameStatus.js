import React from 'react'
import '../Game.css'

const GameStatus = () => {
    const status='Game Over';
  return (
    <div className='game-status mt-3'>
            <h2 className='status text-danger'>{status}</h2>
    </div>
  )
}

export default GameStatus