
import React,{useState, useEffect} from 'react';
import Boton from '../../components/Boton/Boton';

import './Register.css';


const Register = () => {

    //HOOKS 

    const [user, setUser] = useState({
        nombre : '',
        email : '',
        password : ''
        
    });

    const [mensaje, setMensaje] = useState('');

    //USEEFFECT


    useEffect(()=> {
        //Se ejecuta tras la primera actualización (montado), equivale a componentDidMount()
        console.log("HOLA, COMPONENTE MONTADO POR PRIMERA VEZ");
    },[]);

    useEffect(()=> {
        //Se actualiza el estado, es decir, equivale a componentDidUpdate()
        if(user.nombre !== ""){
            console.log(user);
        }
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

        //Comprobación de errores

        if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(user.email) ){
            setMensaje("El email no tiene el formato esperado");
            return;
        }

        if(user.nombre == ''){
            setMensaje("Debes de rellenar el campo nombre");
            return
        }

        //Body a enviar al backend

        let body = {

            nombre : user.nombre,
            email : user.email,
            password : user.password

        }

        console.log("el body es......",body);
        

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

            </div>

            <button onClick={()=> enviaDatos()}>Envia datos al backend</button>

            <Boton nombre='Home' destino=''/>
            <div>{mensaje}</div>
        </div>
    );
}

export default Register;