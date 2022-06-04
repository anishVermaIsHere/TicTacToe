import React from 'react'
import Cell from '../components/Cell';

const GameBoard = ({fn}) => {
  return (
    <div className='container game-board'>
        <Cell index={0} fn={fn}/>
        <Cell index={1} fn={fn}/>
        <Cell index={2} fn={fn}/>
        <Cell index={3} fn={fn}/>
        <Cell index={4} fn={fn}/>
        <Cell index={5} fn={fn}/>
        <Cell index={6} fn={fn}/>
        <Cell index={7} fn={fn}/>
        <Cell index={8} fn={fn}/>
    </div>
  )
}

export default GameBoard