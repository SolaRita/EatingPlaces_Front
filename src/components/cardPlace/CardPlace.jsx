
import styles from "../../styles/modulos/CardPlace.module.css";

export default function CardPlace(props) {

 
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.text}>
          <h4>{props.name}</h4>
          <h5>{props.shortDescription}</h5>
        </div>
      </div>
      <div className={styles.rigth}>
        <div className={styles.text}>
          <h6>{props.district}</h6>
          <h6>{props.price}</h6>
        </div>
      </div>
    </div>
  );
}
