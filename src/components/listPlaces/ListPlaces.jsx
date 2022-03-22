import React from "react";
import styles from "../../styles/modulos/ListPlace.module.css";
import CardPlace from "../cardPlace/CardPlace";
import { useState, useEffect } from "react";
import { Services } from "../../services/Services";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function ListPlaces() {
  const [places, setPlaces] = useState([]);
  const params = useParams(); 
  const apiPlaces = Services();
  
  useEffect(() => {
    const categoryId = params.id;
    const categoryName = params.name;

    console.log(categoryName);
    apiPlaces
      .getPlacesbyCategory(categoryId)
      .then((res) => {
       setPlaces(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiPlaces, places, params.id]);

  console.log (params.name);

  return (
    <div className={styles.frameList}>
      <div className={styles.header}>
        <Link className={styles.volverBox}  to="/" >
        <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
        <p className={styles.volver}>volver</p>
         
        </Link>
        <h2 className={styles.category}>Asia</h2>
      </div>

      {places.map((place, index) => (
        <div className={styles.cardColor}>
          <CardPlace place={place} key={index} />
        </div>
      ))}
    </div>
  );
}
