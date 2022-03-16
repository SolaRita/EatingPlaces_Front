import React, { useState } from "react";
import styles from "../../styles/modulos/CardPlace.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CardPlace(place) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <div className={styles.vista} onClick={(e) => setIsOpen(!isOpen)}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h3>{place.name}</h3>
            <h5>{place.shortDescription}</h5>
          </div>
        </div>
        <div className={styles.rigth}>
          <div className={styles.text}>
            <h6>{place.district}</h6>
            <h6>{place.price}</h6>
          </div>
        </div>
      </div>

      <div>
        {isOpen && (
          <div className={styles.dropdown}>
            <div className={styles.left}>
              <hr/>
              <h7>{place.longDescription}</h7>
              <hr />
              <div className={styles.textLogo}>
                <FontAwesomeIcon className={styles.icon} icon={faStar} />
                <h6>No te pierdas</h6>
              </div>
              <p>{place.doNotMiss}</p>
              <hr />
              <div>
                <div className={styles.textLogo}>
                  <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                  <h6>Destacamos</h6>
                </div>

                <p>{place.highlight}</p>
              </div>
            </div>

            <div className={styles.rigth}></div>
          </div>
        )}
      </div>

      {/* prueba de tags */}

      {/*    {place.category.map((elemento,key)=>{
          return <p key={key}>{elemento}</p>
        })} */}

      {/* {array.forEach((place.category) => {
        
      });}
      <h6>{place.category[0].name}</h6> */}
    </div>
  );
}
