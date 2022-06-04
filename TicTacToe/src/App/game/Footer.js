import React from 'react'
import './Game.css';

const Footer = () => {
    const devInfo='Designed & Developed by Anish'; 
    const d=new Date();
    const mon=d.getFullYear();

  return (
        <footer>
            <section className='developer-section'>
                <h5>{devInfo} Github link:
                <a className='ml-3' href='https://github.com/anishVermaIsHere'>anishVermaIsHere</a> 
                </h5>
                <h5> ©Copyright {mon}</h5>
            </section>
        </footer>
  )
}

export default Footer