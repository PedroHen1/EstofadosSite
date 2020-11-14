import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

function Choose() {
    return (
        <section id="Choose" className='Choose'>
            <Container>
                <Row>
                    <Col className='Choose-container' md={12}>
                        <div className='Choose-left'>
                            <h5>
                                Por que escolher a gente?
                            </h5>
                            <h2>
                                Melhor estofamento da regiao.
                            </h2>
                            <a href='Contact'>CONTATO</a>
                        </div>
                        <div className='Choose-right'>
                            <h3>Veja os diversos motivos pelo qual nos destacamos no mercado.</h3>
                            <ul>
                                <li>
                                    <p>Estofamento de alta qualidade</p>
                                </li>
                                <li>
                                    <p>Garantia de 2 anos</p>
                                </li>
                                <li>
                                    <p>Seguimos a ideia do cliente fielmente</p>
                                </li>
                                <li>
                                    <p>Precos baixos</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Choose