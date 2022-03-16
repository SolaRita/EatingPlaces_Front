import React from 'react';
import '../styles/App.css';
import Navbar from '../components/navbar/Navbar';
import ListPlaces from '../components/listPlaces/ListPlaces';


function Category() {
  return (
    <div className="App">
     <Navbar/>
    <ListPlaces/>
    </div>
  );
}

export default Category;