import React from 'react';
import styles from "../../styles/modulos/ListPlace.module.css"
import CardPlace from "../cardPlace/CardPlace"
import axios from "axios";
import { useState, useEffect } from "react";
import CardCategory from '../cardCategory/cardCategory';


export default function ListCategory () {


  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/places").then((res) => {
      setPlaces(res.data);
    });
  });


    return (
        <div className={styles.frameList}>
            <h2 className={styles.category} >Category</h2>

           
          {places.map(({name, shortDescription, district, price, longDescription, city, doNotMiss, highlight,category, key  })=> (
            <div className={styles.cardColor}>
              
            <CardCategory 
            name={name}
            shortDescription={shortDescription}
            district = {district}
            price = {price}
            longDescription={longDescription}
            city={city}
            doNotMiss={doNotMiss}
            highlight ={highlight}
            category ={category}
            key={key} 
            
            />
           
           </div>
            
          ))}
          </div> 


     

        
    )
}