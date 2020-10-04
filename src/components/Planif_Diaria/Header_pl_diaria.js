import React, { Component} from 'react';
import escudo_mallorca from '../../img/escudo_mallorca.png'
import Image from 'react-bootstrap/Image';
import { Form, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

class Header_pl_diaria extends Component {
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <Row>
                            <Col>
                                <Image src={escudo_mallorca}/>
                            </Col>
                            <Col>
                                <h3 class="col-2">RCD MALLORCA</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={9}>
                        <Form>
                            <Form.Group controlId='form_Planif_Diaria'>
                                <Form.Group controlId="horario_planif">
                                <Form.Row>
                                    <Col xs={4}>
                                        <Form.Label htmlfor="training_date">Dia entrenamiento</Form.Label>
                                        <Form.Control type="date" id="training_date"/>
                                    </Col>
                                    <Col xs={4}>
                                        <Form.Label htmlfor="start_time">Hora comienzo</Form.Label>
                                        <Form.Control type="time" id="start_time"/>
                                    </Col>
                                    <Col xs={4}>
                                        <Form.Label htmlfor="end_time">Hora fin</Form.Label>
                                        <Form.Control type="time" id="end_time"></Form.Control>
                                    </Col>
                                </Form.Row>
                                </Form.Group>
                                <Col xs={12}>
                                    <Form.Group as={Row} controlId="lugar_entrenamiento">
                                        <Form.Label>Lugar</Form.Label>
                                        <Form.Control as="select">
                                            <option value="0">Estadio Son Moix</option>
                                            <option value="0">Ciudad Deportiva - Cancha Principal</option>
                                            <option value="0">Ciudad Deportiva - Cancha Secundaria</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            )
        }
}

export default Header_pl_diaria;