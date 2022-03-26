
import styles from "../../styles/modules/CardCategory.module.css";


export default function CardCategory({category}) {
 

  return (
    <div className={styles.card}>
      <div  >
          
            <h3 className={styles.text}>{category.name}</h3>
    
      </div>
    </div>
  );
}
