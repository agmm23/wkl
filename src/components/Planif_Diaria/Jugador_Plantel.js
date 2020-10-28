import React from 'react';

const Jugador_Plantel = props => { 
    const rows = props.plantelData.map((row, index) => {
        return (
            <tr key={index} 
                className={row.Cond==='OK' ? "positive" : 
                row.Cond==='SA' ? "warning" : 
                row.Cond==='L' ? "error" : 
                row.Cond==='FU' ? "error" :
                row.Cond==='AD' ? "error" :
                "" }>
                <td>{row.No}</td>
                <td>{row.Nombre}</td>
                <td>{row.Posicion}</td>
                <td>{row.Stat}</td>
                <td >{row.Cond}</td>
                <td>{row.Min}</td>
                <td><button className="ui circular red basic button" onClick={() => props.removePerson(index)}>X</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default Jugador_Plantel;