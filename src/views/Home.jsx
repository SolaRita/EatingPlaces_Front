import React from 'react';
import '../styles/App.css';
import Navbar from '../components/navbar/Navbar';
import ListCategory from '../components/listCategory/listCategory';



function Home() {
  return (
    <div className="App">
     <Navbar/>
    <ListCategory/>


    </div>
  );
}

export default Home;