
import React from 'react';
import Boton from '../../components/Boton/Boton';

import './Home.css';



const Home = (props) => {

   

    return (
        <div className="contenedorHome">
            Soy el componente Home.
            <Boton nombre='Register' destino='register'/>
        </div>
    )
}

export default Home;