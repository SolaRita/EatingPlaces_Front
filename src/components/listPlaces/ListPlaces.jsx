import React from 'react';
import styles from "../../styles/modulos/ListPlace.module.css"
import CardPlace from "../cardPlace/CardPlace"
import { useState, useEffect } from "react";
import {Services} from '../../services/Services';


export default function ListPlaces () {
  const [places, setPlaces] = useState([]);

  const apiPlaces = Services();

  useEffect(() => {
    apiPlaces.getPlaces().then((res) => {
      setPlaces(res.data); 
    }).catch(error=>{
      console.log(error)
    })
   
  },[]); 

  

    return (
        <div className={styles.frameList}>
            <h2 className={styles.category} >Category{places.name}</h2>

          {places.map((place,index)=> (
            <div className={styles.cardColor}>
              
            <CardPlace 
            place={place} key={index}
            />
           </div>
          ))}
          </div>  
    )
}