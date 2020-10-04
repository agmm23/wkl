import React from 'react';
import NavBar from './components/Navbar';
import Header_pl_diaria from './components/Planif_Diaria/Header_pl_diaria';
import Plantel from './components/Planif_Diaria/Plantel';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      </Router>
      <Header_pl_diaria/>
      <Plantel/>
    </div>
  );
}

export default App;
