import React , {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {checkError} from '../../utiles/uti';

import './Login.css';

const Login = () => {

    let history = useHistory();

    //HOOKS 

    const [dataLogin, setDataLogin] = useState({
        email : '',
        password : ''
    });

    const [mensaje, setMensaje] = useState('');


    //CICLOS USEEFFECT

    useEffect(()=> {
        //Equivale a componentDidMount()

    },[]);

    useEffect(()=> {
        //Equivale a componentDidUpdate()

    });


    //MANEJADORES

    const manejaEstado = (ev) => {
        setDataLogin({...dataLogin, [ev.target.name] : ev.target.value});
        
    }

    //FUNCIONES

    const sendData = async () => {
        //Comprobacion de errores

        setMensaje('');

        let mensajeError = checkError(dataLogin);
        
        setMensaje(mensajeError);

        if(mensajeError){
            return;
        }

        // let resultado = await axios.post('endpoint', dataLogin);

        // //Tenemos token e Id de user como mínimo y guardamos en localStorage

        // localStorage.setItem("datosLoginUser", resultado);
        // localStorage.setItem('login', true);
        //Redireccionamos.

        return setTimeout( () => {
            history.push('');
        }, 1000);

    }

    return(
        <div className="padreLogin">
            <div className="vistaLogin">
                <pre>{JSON.stringify(dataLogin, null,2)}</pre>
                <p>E-mail</p>
                <input type="email" maxLength="30" placeholder="" name="email" onChange={manejaEstado}></input>
                <p>Password</p>
                <input type="password" maxLength="12" placeholder="" name="password" onChange={manejaEstado}></input>

                <button onClick={()=> sendData()}>LOGIN</button>
            </div>
        </div>
    )
}


export default Login;

