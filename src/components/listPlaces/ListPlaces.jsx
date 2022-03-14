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


    return (
        <div className={styles.frameList}>
            <h2>Category</h2>

          {places.map(({name, shortDescription, district, price, longDescription, city, doNotMiss, highlight })=>(
            <CardPlace
            name={name}
            shortDescription={shortDescription}
            district = {district}
            price = {price}
            longDescription={longDescription}
            city={city}
            doNotMiss={doNotMiss}
            highlight ={highlight}
            
            />
            
          ))}

     

        </div>
    )
}