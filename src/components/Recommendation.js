import React from 'react'
import { Carousel } from 'react-bootstrap';
import White from '../img/whitebg.jpg'

function Recommendation() {
    return (
        <section className='Recommendation'>
            <Carousel className='Carousel'>
                <Carousel.Item className='Carousel-item' interval={3000}>
                    <img
                        className="d-block"
                        src={White}
                        alt="First slide"
                    />
                    <Carousel.Caption className='Carousel-caption'>
                        <h1><i className="fas fa-quote-right"></i></h1>
                        <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas moles</h3>
                        <p>Leticia Melo</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='Carousel-item' interval={3000}>
                    <img
                        className="d-block"
                        src={White}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='Carousel-caption'>
                        <h1><i className="fas fa-quote-right"></i></h1>
                        <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas moles
                        </h3>
                        <p>Fabio Souza</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='Carousel-item' interval={3000}>
                    <img
                        className="d-block"
                        src={White}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='Carousel-caption'>
                        <h1><i className="fas fa-quote-right"></i></h1>
                        <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas moles</h3>
                        <p>Alexandre Menim</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Recommendation