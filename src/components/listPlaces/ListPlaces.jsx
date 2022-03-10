import styles from "../../styles/modulos/ListPlace.module.css"
import CardPlace from "../cardPlace/CardPlace"

export default function ListPlaces () {
    return (
        <div className={styles.frame_list}>
            <h2>Category</h2>
            <CardPlace/>
            <CardPlace/>
            <CardPlace/>
            <CardPlace/>
            <CardPlace/>
        </div>
    )
}