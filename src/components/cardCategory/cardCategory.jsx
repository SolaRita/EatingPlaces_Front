
import styles from "../../styles/modulos/CardPlace.module.css";


export default function CardCategory(place) {
 

  return (
    <div >
      <div className={styles.vista} >
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
    </div>
  );
}
