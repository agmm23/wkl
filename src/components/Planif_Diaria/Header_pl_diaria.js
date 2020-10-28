import React, { Component} from 'react';
import escudo_mallorca from '../../img/escudo_mallorca.png'
import Image from 'react-bootstrap/Image';
import { Form, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

class Header_pl_diaria extends Component {
    render() {
        return(
            <div className="ui grid">
                <div className="row">
                    <div className="one wide column">
                        <img className ="ui tiny circular image" src={escudo_mallorca} />
                    </div>
                    <div className="two wide column">
                        <h3>RCD MALLORCA</h3>
                    </div>
                    <div className="thirteen wide column">
                        <div className="ui form">
                            <div className="ui grid">
                                <div className="three column row">
                                    <div className="fields column">
                                        <div className="field column">
                                            <label className="column">Fecha Entrenamiento</label>
                                            <input className="column" type="date"></input>
                                        </div>
                                    </div>
                                    <div className="fields column">
                                        <div className="field column">
                                            <label className="column">Hora Inicio</label>
                                            <input className="column" type="time"></input> 
                                        </div>
                                    </div>
                                    <div className="fields column">
                                        <div className="field column">
                                            <label className="column">Hora Fin</label>
                                            <input className="column" type="time"></input> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="two column row">
                                    <div className="fields column">
                                        <select className="ui fluid selection dropdown">
                                            <option value="1">Estadio Son Moix</option>
                                            <option value="2">Ciudad Deportiva - Cancha Principal</option>
                                            <option value="3">Ciudad Deportiva - Cancha Secundaria</option>
                                        </select>
                                    </div>
                                    <div className="fields column">
                                        <select className="ui fluid selection dropdown">
                                            <option value="1">Primera</option>
                                            <option value="2">Tercera</option>
                                            <option value="3">Cuarta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            // <Container fluid>
            //     <Row>
            //         <Col xs={3}>
            //             <Row>
            //                 <Col>
            //                     <Image src={escudo_mallorca}/>
            //                 </Col>
            //                 <Col>
            //                     <h3 class="col-2">RCD MALLORCA</h3>
            //                 </Col>
            //             </Row>
            //         </Col>
            //         <Col xs={9}>
            //             <Form>
            //                 <Form.Group controlId='form_Planif_Diaria'>
            //                     <Form.Group controlId="horario_planif">
            //                     <Form.Row>
            //                         <Col xs={4}>
            //                             <Form.Label htmlfor="training_date">Dia entrenamiento</Form.Label>
            //                             <Form.Control type="date" id="training_date"/>
            //                         </Col>
            //                         <Col xs={4}>
            //                             <Form.Label htmlfor="start_time">Hora comienzo</Form.Label>
            //                             <Form.Control type="time" id="start_time"/>
            //                         </Col>
            //                         <Col xs={4}>
            //                             <Form.Label htmlfor="end_time">Hora fin</Form.Label>
            //                             <Form.Control type="time" id="end_time"></Form.Control>
            //                         </Col>
            //                     </Form.Row>
            //                     </Form.Group>
            //                     <Col xs={12}>
            //                         <Form.Group as={Row} controlId="lugar_entrenamiento">
            //                             <Form.Label>Lugar</Form.Label>
            //                             <Form.Control as="select">
            //                                 <option value="0">Estadio Son Moix</option>
            //                                 <option value="0">Ciudad Deportiva - Cancha Principal</option>
            //                                 <option value="0">Ciudad Deportiva - Cancha Secundaria</option>
            //                             </Form.Control>
            //                         </Form.Group>
            //                     </Col>
            //                 </Form.Group>
            //             </Form>
            //         </Col>
            //     </Row>
            // </Container>
            )
        }
}

export default Header_pl_diaria;