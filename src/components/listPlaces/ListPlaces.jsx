import React from 'react';
import styles from "../../styles/modulos/ListPlace.module.css"
import CardPlace from "../cardPlace/CardPlace"
import axios from "axios";
import { useState, useEffect } from "react";


export default function ListPlaces () {


  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/places").then((res) => {
      setPlaces(res.data);
    });
  });
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
   

/*   const [colors, setColors] = useState (['cardBeige'])

  const colores = ['className={styles.cardBeige}']
 */
    return (
        <div className={styles.frameList}>
            <h2 className={styles.category} >Category</h2>

            

           {/*  {places.map((a,i)=> <p className={styles.colores [0]} key={i}>{a.name}</p>
          )} */}

           
          {places.map(({name, shortDescription, district, price, longDescription, city, doNotMiss, highlight,category, key  })=> (
            <div className={styles.cardColor}>
              
            <CardPlace 
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