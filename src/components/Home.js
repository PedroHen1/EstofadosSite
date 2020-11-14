import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg from '../img/home-img.jpeg'


function Home () {
    return(
        <section id="Home" className='Home'>
            <Navbar />
            <div className='Home-container'>
                <div className='Home-card'>
                    <h3>Faça um orçamento</h3>
                    <p><a href='#Contact'>Contato</a></p>
                </div>
            <h1>Estofado</h1>
                <img src={HomeImg} alt="Background" className='img-fluid'></img>
            </div>
        </section>
    )
}

export default Home