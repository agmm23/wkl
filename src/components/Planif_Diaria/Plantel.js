import React, { Component } from "react";
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

const TableBody = props => { 
    const rows = props.plantelData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.No}</td>
                <td>{row.Nombre}</td>
                <td>{row.Posicion}</td>
                <td>{row.Stat}</td>
                <td>{row.Cond}</td>
                <td>{row.Min}</td>
                <td><button onClick={() => props.removePerson(index)}>X</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Plantel = (props) => {
    const { plantelData, removePerson } = props;
        return (
            <table>
                <TableHeader />
                <TableBody plantelData={plantelData} removePerson={removePerson} />
            </table>
        );
}

export default Plantel;