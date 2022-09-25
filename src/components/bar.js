import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faGraduationCap, faTrophy, faBaby } from '@fortawesome/free-solid-svg-icons';




export default function Bar() {

    function handleOnClick(e){
        e.preventDefault();
        console.log(e);
    }
    
    
    return (

        <div>
          
            <button onClick={handleOnClick}><FontAwesomeIcon icon={faFutbol} /></button>
            <button onClick={handleOnClick}><FontAwesomeIcon icon={faGraduationCap} /></button>
            <button onClick={handleOnClick}><FontAwesomeIcon icon={faTrophy} /></button>

        </div>




    );

}