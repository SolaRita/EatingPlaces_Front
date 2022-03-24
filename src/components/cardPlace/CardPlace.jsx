import React, { useState } from "react";
import styles from "../../styles/modulos/CardPlace.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CardPlace({ place }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState([]);

  return (
    <div>
      <div className={styles.vista} onClick={(e) => setIsOpen(!isOpen)}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h3>{place.name}</h3>
            <h5 className={styles.shortDescription}>
              {place.shortDescription}
            </h5>
          </div>
        </div>
        <div className={styles.rigth}>
          <div>
            <h6 className={styles.districtAndPrice}>{place.district}</h6>
            <h6 className={styles.districtAndPrice}>{place.price}</h6>
          </div>
        </div>
      </div>

      <div>
        {isOpen && (
          <div className={styles.dropdown}>
            <div className={styles.left}>
              <hr />
              <p className={styles.description}>{place.longDescription}</p>
              <hr />
              <div className={styles.textLogo}>
                <FontAwesomeIcon className={styles.icon} icon={faStar} />
                <h6 className={styles.smallTitle}>No te pierdas</h6>
              </div>
              <p className={styles.description}>{place.doNotMiss}</p>
              <hr />
              <div>
                <div className={styles.textLogo}>
                  <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                  <h6 className={styles.smallTitle}>Destacamos</h6>
                </div>

                <p className={styles.description}>{place.highlight}</p>
              </div>

            
            </div>

            <div className={styles.rigth}></div>
          </div>
        )}
      </div>
    </div>
  );
}
