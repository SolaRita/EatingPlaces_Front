
import React, {useState} from "react";
import styles from "../../styles/modulos/CardPlace.module.css";


export default function CardPlace(place) {

  const [isOpen, setIsOpen] = useState (false);


  return (

    <div className={styles.card}>

      <div className={styles.vista} onClick={(e) => setIsOpen(!isOpen)}>
      <div className={styles.left}>
        <div className={styles.text}>
          <h4>{place.name}</h4>
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
      <div className = {styles.dropdown}>
     <div className={styles.left}>
       	
          <hr />
          <p>{place.longDescription}</p>
          <h6>No te pierdas</h6>
          <p>{place.doNotMiss}</p>
          <h6>Destacamos</h6>
          <p>{place.higthlight}</p>
        </div>

        <div className={styles.rigth}>
          <h6>MAPA</h6>
        </div>

     </div>


     )}
</div>
        
     
    </div>
  );
}
