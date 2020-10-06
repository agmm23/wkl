import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Header_pl_diaria from './components/Planif_Diaria/Header_pl_diaria';
import Plantel from './components/Planif_Diaria/Plantel';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import data_plantel from './samples/data_plantel.json'
class App extends Component {

  state = {
    plantel: [
      {
        "No": 1,
        "Nombre": "Garcia, A",
        "Posicion": "Gol",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 100
      },
      {
        "No": 12,
        "Nombre": "Lopez, M",
        "Posicion": "Gol",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 90
      },
      {
        "No": 21,
        "Nombre": "Mina, K",
        "Posicion": "Gol",
        "Stat": "Juv",
        "Cond": "OK",
        "Min": 90
      },
      {
        "No": 2,
        "Nombre": "Mora, L",
        "Posicion": "Zag",
        "Stat": "Prof",
        "Cond": "SA",
        "Min": 45
      },
      {
        "No": 4,
        "Nombre": "Martinez, K",
        "Posicion": "Lat",
        "Stat": "Prof",
        "Cond": "L",
        "Min": 0
      },
      {
        "No": 14,
        "Nombre": "Lomeri, L",
        "Posicion": "Zag",
        "Stat": "Prof",
        "Cond": "FU",
        "Min": null
      },
      {
        "No": 32,
        "Nombre": "Gimenez, O",
        "Posicion": "Zag",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 100
      },
      {
        "No": 3,
        "Nombre": "Romero P",
        "Posicion": "Zag",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 100
      },
      {
        "No": 6,
        "Nombre": "Kolinto M",
        "Posicion": "Lat",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 15,
        "Nombre": "Marin J",
        "Posicion": "Lat",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 22,
        "Nombre": "Gomez H",
        "Posicion": "Lat",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 100
      },
      {
        "No": 5,
        "Nombre": "Alonso T",
        "Posicion": "Vol",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 8,
        "Nombre": "Erazo L",
        "Posicion": "Vol",
        "Stat": "Prof",
        "Cond": "SA",
        "Min": 60
      },
      {
        "No": 19,
        "Nombre": "Polino R",
        "Posicion": "Zag",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 16,
        "Nombre": "Robira,S",
        "Posicion": "Vol",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 22,
        "Nombre": "Torrez,R",
        "Posicion": "Vol",
        "Stat": "Prof",
        "Cond": "SA",
        "Min": 60
      },
      {
        "No": 23,
        "Nombre": "Suarez,O",
        "Posicion": "Vol",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 7,
        "Nombre": "Paganini,R",
        "Posicion": "Ext",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 11,
        "Nombre": "Alvarez,R.",
        "Posicion": "Ext",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 9,
        "Nombre": "Zurito,D",
        "Posicion": "Del",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 10,
        "Nombre": "Reyes,L",
        "Posicion": "Del",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 18,
        "Nombre": "Vidal,E",
        "Posicion": "Del",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 25,
        "Nombre": "Hernandez,L",
        "Posicion": "Del",
        "Stat": "Juv",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 24,
        "Nombre": "Martinez,M",
        "Posicion": "Del",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 17,
        "Nombre": "Gonzalez,E",
        "Posicion": "Ext",
        "Stat": "Prof",
        "Cond": "OK",
        "Min": 100
      },
      {
        "No": 18,
        "Nombre": "Perez,F",
        "Posicion": "Ext",
        "Stat": "Juv",
        "Cond": "OK",
        "Min": 128
      },
      {
        "No": 26,
        "Nombre": "Mautone,F",
        "Posicion": "Lat",
        "Stat": "Juv",
        "Cond": "AD",
        "Min": 0
      }
     ],
  }

  removePerson = (index) => {
    const {plantel} = this.state
  
    this.setState({
      plantel: plantel.filter((plantel, i) => {
        return i !== index
      }),
    })
  }
  
  render() {
    
    const { plantel } = this.state

    return (
      <div className="App">
        <Router>
          <NavBar/>
        </Router>
        <Header_pl_diaria/>
        <Plantel
          plantelData={plantel}
          removePerson={this.removePerson}
        />
      </div>
    );
  }   
}

export default App;
