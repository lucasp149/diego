import { Link } from "react-router-dom";
import styles from "./estilos.module.css";


export default function NavBar() {
    return (
        <div className={`${styles.barra} `}>
            <div className={styles.titulos}>
                <Link className={styles.botones} to="/home">Home</Link>
                <Link className={`${styles.botones} ${styles.yellow}`} to="/curriculum">Curriculum</Link>
                <Link className={styles.botones} to="/goles">Goles</Link>
            </div>
        </div>
    )
}