import React, { useState } from 'react'

function Navbar (){
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='Nav-bar'>
            <h2>
                Estofado
            </h2>
            <div className='Nav-menu'>
                <ul style={{transform: click ? "translateX(0px)" : "translateX(-6000px)"}}>
                    <li><a onClick={handleClick}  href='#'>Home</a></li>
                    <li><a onClick={handleClick} href='#Services'>Servicos</a></li>
                    <li><a onClick={handleClick} href='#Choose'>Sobre</a></li>
                    <li><a onClick={handleClick} href='#Contact'>Contato</a></li>
                </ul>
            </div> 
            <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
    )
}

export default Navbar