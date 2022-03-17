import React from 'react';
import '../styles/App.css';
import Navbar from '../components/navbar/Navbar';
import ListCategories from '../components/listCategories/listCategories';



function Home() {
  return (
    <div className="App">
     <Navbar/>
    <ListCategories/>


    </div>
  );
}

export default Home;