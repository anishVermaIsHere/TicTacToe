import React from 'react';
import '../Game.css';

const Cell = ({index}) => {

  return (
    <div className='cell' onClick={()=>handleClick(index)}></div>
  )
}

export default Cell