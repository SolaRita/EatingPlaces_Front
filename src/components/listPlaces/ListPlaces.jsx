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
  const [category, setCategory] = useState([]);
  const [dataExist, setDataExist] = useState(false);
  const [catName, setCatName] = useState("");

  const params = useParams();
  const apiPlaces = Services();
  const cat = () => {
    let catName = category.filter((category) => category.id === catId);
    setCatName(catName[0].name);
  };

  const catId = parseInt(params.id);

  useEffect(() => {
    apiPlaces.getPlacesbyCategory(catId).then((res) => {
      setPlaces(res.data);
      setCategory(res.data[0].category);
      cat();
      setDataExist(true);
    });
  });

  return (
    <div className={styles.frameList}>
      <div className={styles.header}>
        <Link className={styles.volverBox} to="/">
          <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          <p className={styles.volver}>volver</p>
        </Link>

        <div>
          <h2 className={styles.category}>
            {" "}
            {dataExist ? <p>{catName}</p> : <p>loading</p>}{" "}
          </h2>
        </div>
      </div>

      {dataExist
        ? places.map((place, index) => (
            <div className={styles.cardColor} key={index}>
              <CardPlace place={place} />
            </div>
          ))
        : "Loading"}
    </div>
  );
}

/* {categoryName.name === category ? (
  <h2 className={styles.category}> {category} </h2>
) : (
  <h2>nada</h2>

  {/* <p>{()=>{cat()} }</p> */
