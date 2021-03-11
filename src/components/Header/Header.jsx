
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {

    //HOOKS 

    const [logeado, setMensaje] = useState(false);

    //USEEFFECT

    useEffect(()=> {
        //Lee si existe en localstorage la variable logeado
        setMensaje(localStorage?.getItem('login'));
    },[])

    if(logeado === false){

        return(
            <div className="vistaHeader">
                Soy el header
            </div>
        )

    }

    // return(<div onClick={()=> llevameUser()}>
    //     {localStorage.getItem('nombreUser')}
    // </div>)

    
}

export default Header;