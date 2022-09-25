import LayOut from "../components/layOut";
import styles from "../components/estilos.module.css";
import Presentation  from "../components/presentation";
import Loading from "../components/loading";
import { useEffect, useState } from "react";

export default function Inicio() {

    const [state, setState] = useState(false);

    useEffect(()=>{
        setTimeout(()=>setState(true),3000)
    },[]);

    return (

        <div> {state ? <Presentation /> : <Loading />}</div>

    );
}