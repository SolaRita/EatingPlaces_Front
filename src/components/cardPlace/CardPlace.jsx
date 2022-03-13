
import styles from "../../styles/modulos/CardPlace.module.css";

export default function CardPlace(place) {

 
  return (
    <div className={styles.card}>
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
  );
}
