import styles from "../../styles/modulos/CardPlace.module.css";

export default function CardPlace() {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.text}>
          <h4>Name</h4>
          <h5>Short Description</h5>
        </div>
      </div>
      <div className={styles.rigth}>
        <div className={styles.text}>
          <h6>District</h6>
          <h6>Price</h6>
        </div>
      </div>
    </div>
  );
}
