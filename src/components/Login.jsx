import React from "react";
import { Fragment, useState } from "react";

const Login = () => {

    const [datos, setDatos] = useState({
        email:'',
        password:''
    })

    const handleInputChange = (event) => {
        console.log(event.target.email)
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.email] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.email + '' + datos.password)
    }

    return (
        <Fragment>
            <form onSubmit={enviarDatos}>
                <input type='text' placeholder="Ingresa tu correo eléctronico" onChange={handleInputChange}>
                </input>
                <input type='text' placeholder="Ingresa tu contraseña" onChange={handleInputChange}>
                </input>

                <button type= 'submit'>Ingresar</button>
            </form>
        </Fragment>
    )
}

export default Login;