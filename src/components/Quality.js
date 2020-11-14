import React from 'react'
import quality from '../img/quality.jpeg'

function Quality() {
    return (
        <section className='About'>
            <div className='About-txt'>
                <h3>QUALIDADE</h3>
                <h1>Artesanato de Alta Qualidade</h1>
                <p>Artesanato é o próprio trabalho manual, utilizando-se de matéria-prima natural <br/>ou produção de um artesão.</p>
            </div>
            <img className='About-img' src={quality}>
            </img>
        </section>
    )
}

export default Quality