import React from "react";
import { Fragment, useState } from "react";

const Login = () => {

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })

    console.log(datos);

    const handleInputEmailChange = (event) => {

        console.log(event.target.value)
        setDatos({
            ...datos,
            email: event.target.value
        })
    }

    const handleInputPassword =(event) => {
        
        setDatos({
            ...datos,
            password: event.target.value
        })

    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.email + '' + datos.password)
    }

    return (
        <Fragment>
            <form onSubmit={enviarDatos}>
                <input type='text' placeholder="Ingresa tu correo eléctronico" onChange={handleInputEmailChange} name="email" >
                </input>
                <input type='password' placeholder="Ingresa tu contraseña" onChange={handleInputPassword} name="password">
                </input>

                <button type='submit'>Ingresar</button>
            </form>
        </Fragment>
    )
}

export default Login;