
import styles from "../../styles/modulos/CardCategory.module.css";


export default function CardCategory({category}) {
 

  return (
    <div >
      <div className={styles.card} >
          
            <h3 className={styles.text}>{category.name}</h3>
    
      </div>
    </div>
  );
}
