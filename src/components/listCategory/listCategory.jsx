import React from 'react';
import styles from "../../styles/modulos/ListCategory.module.css"
import { useState, useEffect } from "react";
import CardCategory from '../cardCategory/cardCategory';
import {Services} from '../../services/Services';


export default function ListCategory () {
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
              <h2 className={styles.city} >Barcelona{places.name}</h2>
              
            <div className={styles.grid}>
            {places.map((place,index)=> (
              <div className={styles.cardColor}>
                
              <CardCategory
              place={place} key={index}
              />
             </div>
            ))}
            </div>
            </div>  
      )
  }