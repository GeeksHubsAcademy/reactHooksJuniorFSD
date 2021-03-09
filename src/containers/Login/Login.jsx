

import React from "react";


class Login extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            email : "",
            password: ""
        }
        
    };

    componentDidMount(){
        //CUANDO EL COMPONENTE SE HA MONTADO
    }

    componentDidUpdate(){
        //CUANDO EL COMPONENTE SE ACTUALIZA
    }

    componentWillUnmount(){
        //CUANDO EL COMPONENTE SE DESMONTA
    }
    
    render() {
        return(
            <div>
                Soy el componente Login
            </div>
        );
    };
    
    
};


export default Login;