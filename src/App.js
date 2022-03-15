import React from 'react';
import '../src/styles/App.css';
import Navbar from './components/navbar/Navbar.jsx';
import ListPlaces from './components/listPlaces/ListPlaces';
import Map from './components/cardPlace/Map'

function App() {
  return (
    <div className="App">
     <Navbar/>
    <ListPlaces/>
   
    </div>
  );
}

export default App;
