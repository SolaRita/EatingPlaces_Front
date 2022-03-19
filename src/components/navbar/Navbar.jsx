import styles from "../../styles/modulos/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Eating Places</h1>
      <h2>una guía simple de los sitios a los que nos gusta ir</h2>
      <h4>by Eating Patterns</h4>
    </div>
  );
}
