
import styles from "../../styles/modulos/CategoryPlace.module.css";


export default function CardCategory(place) {
 

  return (
    <div >
      <div className={styles.card} >
          
            <h3 className={styles.text}>{place.name} Asia</h3>
    
      </div>
    </div>
  );
}
