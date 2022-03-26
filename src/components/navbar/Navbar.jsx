import styles from "../../styles/modules/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      
      <h1>Eating Places</h1>
      <h2 className={styles.subt}>una guía simple de los sitios a los que nos gusta ir</h2>
      <h3  className={styles.byEating}>by Eating Patterns</h3>
    
    </div>
  );
}
