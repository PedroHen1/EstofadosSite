import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Forniture from '../img/mobilia.jpeg'
import Automotive from '../img/automoveis.jpeg'
import Commercial from '../img/comercio.jpeg'
import Pillows from '../img/pillows.jpeg'

function Services() {
    return (
        <section id="Services" className='Services'>
            <Container className='Services-container'>
            <h1>Serviços</h1>
                <Row>
                    <Col md={12} lg={6}>
                        <Card className='mb-4'>
                            <Card.Img className='Services-img' variant="top" alt="forniture" src={Forniture} />
                            <Card.ImgOverlay>
                                <Card.Title className='Title'>
                                Mobília
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className='mb-4'>
                            <Card.Img className='Services-img' variant="top" alt="automotive" src={Automotive} />
                            <Card.ImgOverlay>
                                <Card.Title className='Title'>
                                Automotivo
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className='mb-4'>
                            <Card.Img className='Services-img' variant="top" alt="commercial" src={Commercial} />
                            <Card.ImgOverlay>
                                <Card.Title className='Title'>
                                Comercial
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className='mb-4'>
                            <Card.Img className='Services-img' variant="top" alt="pillows" src={Pillows} />
                            <Card.ImgOverlay>
                                <Card.Title className='Title'>
                                Travesseiros<br />Colchoes
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services