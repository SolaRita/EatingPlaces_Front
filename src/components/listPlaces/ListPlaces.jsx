import React from "react";
import styles from "../../styles/modulos/ListPlace.module.css";
import CardPlace from "../cardPlace/CardPlace";
import { useState, useEffect } from "react";
import { Services } from "../../services/Services";
import { Link } from "react-router-dom";

export default function ListPlaces() {
  const [places, setPlaces] = useState([]);

  const apiPlaces = Services();

  useEffect(() => {
    apiPlaces
      .getPlaces()
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiPlaces, places]);

  return (
    <div className={styles.frameList}>
      <div className={styles.header}>
        <Link to="/" className={styles.volver}>
          Volver
        </Link>
        <h2 className={styles.category}>Category</h2>
      </div>

      {places.map((place, index) => (
        <div className={styles.cardColor}>
          <CardPlace place={place} key={index} />
        </div>
      ))}
    </div>
  );
}
