import LayOut from "../components/layOut";
import styles from "../components/estilos.module.css";

export default function Goles() {
    return (

        <LayOut>
            <div className={styles.video}>
                <iframe className={styles.videoItself} width="80%" height="80%" src="https://www.youtube.com/embed/Yfqc96svZb8?autoplay=1&mute=1&loop=1" title="Diego Maradona best goals and plays" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </LayOut>




    );
}