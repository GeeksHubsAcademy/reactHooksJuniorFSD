
import React from 'react';

import './Boton.css';

import {useHistory} from 'react-router-dom';

const Boton = (props) => {

    let history = useHistory();

    const direccioname = () => {
        history.push(`/${props.destino}`)
    }

    return(
        <div onClick={()=> direccioname()} className="botoncitoGuay">
            {props.nombre}
        </div>
    )
}

export default Boton;