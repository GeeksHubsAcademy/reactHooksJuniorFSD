
import React from 'react';
import Boton from '../../components/Boton/Boton';
import Header from '../../components/Header/Header';

import './Home.css';



const Home = () => {

   

    return (
        <div className="contenedorHome">
            {/* <Header/> */}
            Soy el componente Home.
            <Boton nombre='Register' destino='register'/>
            <Boton nombre='Login' destino='login'/>
        </div>
    )
}

export default Home;