import styles from "../components/estilos.module.css";
import LayOut from "./layOut";

export default function Presentation() {

    return (

        <LayOut>
            <div className={`${styles.all} ${styles.center} ${styles.appear} ${styles.presentacion}`}>

                <h1>DIEGO ARMANDO MARADONA</h1>
                <img className={styles.fotoDiego} src="/diego.jpg"></img>
                <h2>Futbolista profesional / Director Técnico / Ídolo popular</h2>
                <p>Nacido en Lanús, provincia de Buenos Aires, se convirtió en uno de los deportistas más reconocidos de la historia. Su talento inigualable y su especial personalidad lo convirtieron en una figura dentro y fuera de la cancha.
                    Jugador, goleador y capitán ganó un mundial con la selección Argentina y jugó en clubes como Boca Juniors, Barcelona, Napoli y Sevilla.
                    Como director técnico se desempeñó en Mandiyú, Racing Club, la selección Argentina y Gimnasia de la Plata, entre otros.
                </p>

                <img className={styles.firma} src="/diegoFirma.png"></img>
            </div>


            <div className={styles.linea}></div>
        </LayOut>
    );
}