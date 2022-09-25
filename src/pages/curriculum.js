import LayOut from "../components/layOut";
import styles from "../components/estilos.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faGraduationCap, faTrophy, faBaby } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { useEffect, useState } from "react";

export default function Curriculum() {
    const [view, setView] = useState("baby");
    const [player, setPlayer] = useState("diegoArg");
    const [dt, setDt] = useState("dtMan");

    useEffect(() => {
        console.log(view);
    }, [view])

    function handleOnClick(e, name) {

    }
    return (

        <LayOut>

            <div className={`${styles.letter} ${styles.all}`}>
                <h1>CURRICULUM</h1>
                <div className={styles.carrousel}>

                    <div style={{ display: view == "baby" ? "block" : "none" }}>
                        <h2>Nacimiento <FontAwesomeIcon icon={faBaby} /></h2>
                        <div className={` ${styles.centrado}`}>
                            <h4>30 de octubre <span>(1960)</span></h4>
                            <img src="./diegoBebe.png" style={{ height: "30vh" }}></img>
                            <p>En Villa Fiorito, Lanús, Buenos Aires, Argentina</p>
                            <p>Padres: Diego Maradona y  Dalma Salvadora "Tota" Franco</p>

                        </div>
                    </div>

                    <div style={{ display: view == "player" ? "block" : "none" }}>
                        <h2>Como jugador <FontAwesomeIcon icon={faFutbol} /></h2>
                        <div className={styles.curr}>
                            <div className={` ${styles.centrado} ${styles.equipo}`}>
                                <h4 onMouseEnter={() => setPlayer("diegoArg")}>Argentinos Juniors <span>(1976-1980)</span></h4>
                                <h4 onMouseEnter={() => setPlayer("diegoBoc1")}>Boca Juniors <span>(1981)</span></h4>
                                <h4 onMouseEnter={() => setPlayer("diegoBar")}>FC Barcelona <span>(1982-1984)</span></h4>
                                <h4 onMouseEnter={() => setPlayer("diegoNap")}>Napoli <span>(1984-1990)</span></h4>
                                <h4 onMouseEnter={() => setPlayer("diegoSev")}>Sevilla <span>(1992-1993)</span></h4>
                                <h4 onMouseEnter={() => setPlayer("diegoNew")}>Newell's Old Boys <span>(1993-1994)</span></h4>
                                <h4 onMouseEnter={() => setPlayer("diegoBoc2")}>Boca Juniors <span>(1995-1997)</span></h4>
                            </div>
                            <div className={styles.jugador} style={{ backgroundImage: `url(/${player}.jpg)` }}></div>
                        </div>
                    </div>

                    <div style={{ display: view == "dt" ? "block" : "none" }}>
                        <h2>Como director técnico <FontAwesomeIcon icon={faGraduationCap} /></h2>
                        <div className={styles.curr}>
                            <div className={styles.jugador} style={{ backgroundImage: `url(/${dt}.jpg)` }}></div>
                            <div className={` ${styles.centrado} ${styles.equipo}`}>
                                <h4 onMouseEnter={() => setDt("dtMan")}>Mandiyú <span>(1994)</span></h4>
                                <h4 onMouseEnter={() => setDt("dtRac")}>Racing Club <span>(1995)</span></h4>
                                <h4 onMouseEnter={() => setDt("dtArg")}>Selección Argentina <span>(2008-2010)</span></h4>
                                <h4 onMouseEnter={() => setDt("dtAlw")}>Al Wasl <span>(2011-2012)</span></h4>
                                <h4 onMouseEnter={() => setDt("dtAlf")}>Al Fujairah <span>(2017)</span></h4>
                                <h4 onMouseEnter={() => setDt("dtDor")}>Dorados de Sinaloa <span>(2018-2019)</span></h4>
                                <h4 onMouseEnter={() => setDt("dtGim")}>Gimnasia y Esgrima La Plata <span>(2019-2020)</span></h4>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: view == "titles" ? "block" : "none" }}>
                        <h2>Títulos <FontAwesomeIcon icon={faTrophy} /></h2>
                        <div className={` ${styles.centrado}`}>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_Juvenil_de_1979">
                                <h5>Mundial de Fútbol Sub-20 <span>(1979)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_1981_(Argentina)">
                                <h5>Torneo Argentino primera división <span>(1981)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Copa_del_Rey_de_f%C3%BAtbol_1982-83">
                                <h5>Copa del Rey <span>(1983)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Supercopa_de_Espa%C3%B1a_de_F%C3%BAtbol_1983">
                                <h5>Supercopa de España <span>(1983)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Copa_de_la_Liga_de_Primera_Divisi%C3%B3n_1983">
                                <h5>Copa de la Liga de España <span>(1983)</span></h5>
                            </a>
                            <a className={styles.shine} target="_blank" href="https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986">
                                <h5>Copa del Mundo <span>(1986)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Serie_A_(Italia)_1986-87">
                                <h5>Liga Italiana (Calcio) <span>(1987)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Copa_Italia_1986-87">
                                <h5>Copa Italia <span>(1987)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Serie_A_(Italia)_1989-90">
                                <h5>Liga Italiana (Calcio) <span>(1990)</span></h5>
                            </a>
                            <a target="_blank" href="https://es.wikipedia.org/wiki/Supercopa_de_Italia_1990">
                                <h5>Supercopa Italiana <span>(1990)</span></h5>
                            </a>
                        </div>
                    </div>
                </div>


                <div className={styles.barraBaja}>
                    <button className={styles.boton} onMouseEnter={() => setView("baby")}><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faBaby} /></button>
                    <button className={styles.boton} onMouseEnter={() => setView("player")}><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faFutbol} /></button>
                    <button className={styles.boton} onMouseEnter={() => setView("dt")}><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faGraduationCap} /></button>
                    <button className={styles.boton} onMouseEnter={() => setView("titles")}><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faTrophy} /></button>
                </div>
            </div>

        </LayOut >

    );



}