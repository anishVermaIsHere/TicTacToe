import React from 'react'
import '../Game.css'

const PlayBtn = ({fn}) => {
  return (
    <div className='button-container'>
        <button id='play-game' onClick={fn}>Restart Game</button>
    </div>
  )
}

export default PlayBtn