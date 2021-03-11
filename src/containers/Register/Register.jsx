
import React,{useState, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import Boton from '../../components/Boton/Boton';


import {checkError, checkAge} from '../../utiles/uti';

import './Register.css';


const Register = () => {

    // let history = useHistory();

    //HOOKS 

    const [user, setUser] = useState({
        nombre : '',
        email : '',
        password : '',
        date : ''
        
    });

    const [mensaje, setMensaje] = useState('');
    const [mensajeFecha, setMensajeFecha] = useState('');

    //USEEFFECT


    useEffect(()=> {
        //Se ejecuta tras la primera actualización (montado), equivale a componentDidMount()
        console.log("HOLA, COMPONENTE MONTADO POR PRIMERA VEZ");
        
    },[]);

    useEffect(()=> {
        //Se actualiza el estado, es decir, equivale a componentDidUpdate()
        
    });

    useEffect(()=>{

        return()=>{
            //Equivale al componentWillUnmount()
            console.log("ME HE DESMONTADO, ADIOS");
        }
    },[]);

    


    //HANDLERS

    const manejaEstado = (ev) => {
        setUser({...user, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
        
    }


    //FUNCIONES

    const enviaDatos = async () => {

        //Comprobación de errores, primero fecha
        
        setMensaje('');
        let errorFecha = checkAge(user.date,16);
        setMensajeFecha(errorFecha);

        if(errorFecha){
            return
        }
        
        let mensajeError = checkError(user);
        
        setMensaje(mensajeError);

        if(mensajeError){
            return;
        }
        
        //Body a enviar al backend

        let body = {

            nombre : user.nombre,
            email : user.email,
            password : user.password,
            date : user.date

        }

        console.log("FASE FINAL... 3 . 2 ..1 DESPEGUE",body);
        

        //Proceso de envio
        //let data = await axios.post('endpointmaravilloso', body);
        //
    }

    //RETURN


    return(
        <div className='vistaRegister'>
            <pre>{JSON.stringify(user, null,2)}</pre>
            <div className='cardRegister'>

            <p>Nombre : </p>
            <input type="text" maxLength="30" placeholder="" name="nombre" onChange={manejaEstado}></input>
            <p>Email : </p>
            <input type="email" maxLength="30" placeholder="" name="email" onChange={manejaEstado}></input>
            <p>Password : </p>
            <input type="password" maxLength="12" placeholder="" name="password" onChange={manejaEstado}></input>
            <p>Fecha nacimiento : </p>
            <input type="date" maxLength="50" name="date" onChange={manejaEstado}></input>
            <div>{mensaje}</div>
            </div>

            <button onClick={()=> enviaDatos()}>Envia datos al backend</button>

            <Boton nombre='Home' destino=''/>
            <div>{mensajeFecha}</div>
        </div>
    );
}

export default Register;