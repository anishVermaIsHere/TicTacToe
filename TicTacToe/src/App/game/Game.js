import React,{useState} from 'react';
import './Game.css';
import Footer from './Footer';
import PlayBtn from './components/PlayBtn';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import { gameIcon } from './components/icons';

const Game = () => {
    let x=gameIcon.X;
    let o=gameIcon.O;
    const[turn, setTurn]=useState(x);
    const[cells,setCells]=useState(Array(9).fill(''));
    const [winner,setWinner]=useState();
    const [gameStatus,setGameStatus]=useState(false);
    const [msg,setMsg]=useState('Turn');
    
    const handleClick=(index)=>{
        if(cells[index]!==''){
            alert('You clicked already');
            return;
        }
        let blocks=[...cells];
        if(turn===x){
            blocks[index]=x;
            setTurn(o);
        }
        else {
            blocks[index]=o;
            setTurn(x);
        }

        checkWinner(blocks);
        setCells(blocks);
    }
    const restartGame=()=>{
        let arr=Array(9).fill('');
        setCells(arr);
        gameOver();
    }
    const gameOver=()=>{
        setTurn('');
        setWinner(null);
        setGameStatus();
        setMsg('Turn')
    }
    const checkWinner=(blocks)=>{
        let sets={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            diagnal:[
                [0,4,8],
                [2,4,6]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ]
        }

        for(let set in sets){
            sets[set].forEach((pattern)=>{
                if(
                    blocks[pattern[0]]===''||
                    blocks[pattern[1]]===''||
                    blocks[pattern[2]]===''
                ){
                } else if(
                    blocks[pattern[0]]===blocks[pattern[1]]&&
                    blocks[pattern[1]]===blocks[pattern[2]]
                    )
                    {
                        setWinner(blocks[pattern[0]]);
                        setGameStatus(true);
                        setTurn((prev)=>prev=!prev);
                        setMsg('Won');
                        if(blocks[pattern[0]].props.className==='fa-o'){
                            setTurn(o);
                        }
                        else {
                            setTurn(x);
                        }
                    }

            });
        }
    }

    const Cell = ({index}) => {
        return (
          <div className='cell' onClick={()=>{handleClick(index)}}>
            {cells[index]}          
            </div>
        )
      }
      
  return (
      <>
        <div className='container-lg'>
            <Header />
            <main className='row'>
                <section className='col-lg-12'>
                <div className='container game-board'>
                    <Cell index={0} />
                    <Cell index={1} />
                    <Cell index={2} />
                    <Cell index={3} />
                    <Cell index={4}/>
                    <Cell index={5} />
                    <Cell index={6} />
                    <Cell index={7} />
                    <Cell index={8} />
                </div>
                    
                </section>
                <section className='col-lg-12 mt-2'>
                    <div className='turn'>
                        <span className='turn-sign wrapper'>{turn}</span>
                        <b className='ml-3'>{msg}</b>
                    </div>
                    <div className='col-lg'>
                        <PlayBtn fn={restartGame}/>
                       { 
                            gameStatus ? <GameStatus /> : ''
                       } 
                    </div>
                   
                </section>
            </main>
        </div>
        <Footer />
      </>

  )
}

export default Game