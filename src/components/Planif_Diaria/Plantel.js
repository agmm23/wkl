import React, { Component } from "react";
import Jugador_Plantel from './Jugador_Plantel';
import {Container, Table}  from 'react-bootstrap';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>No</th>
                <th>Nombre</th>
                <th>Posicion</th>
                <th>Stat</th>
                <th>Cond</th>
                <th>Min</th>
            </tr>
        </thead>
    );
}


const Plantel = (props) => {
    const { plantelData, removePerson } = props;
        return (
            <div>
                <div className="ui fluid icon input">
                    <input type="text" placeholder="Buscar Jugador..." />
                    <i className="search icon"></i>
                </div>
                <table className="ui selectable celled table collapsing compact">
                    <TableHeader />
                    <Jugador_Plantel plantelData={plantelData} removePerson={removePerson} />
                </table>
            </div>
        );
}

export default Plantel;