import React from "react";
import { Fragment, useState } from "react";

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    console.log(user);

    const handleInputEmailChange = (event) => {

        console.log(event.target.value)
        setUser({
            ...user,
            email: event.target.value
        })
    }

    const handleInputPassword =(event) => {
        setUser({
            ...user,
            password: event.target.value
        })

    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('usuario: ' + user.email + ' ' + 'password: ' + user.password)
    }

    return (
        <Fragment>
            <form onSubmit={enviarDatos}>
                <input type='email' placeholder="Ingresa tu correo eléctronico" onChange={handleInputEmailChange} name="email" id="email" >
                </input>
                <input type='password' placeholder="Ingresa tu contraseña" onChange={handleInputPassword} name="password" id="password">
                </input>

                <button type='submit'>Ingresar</button>
            </form>
        </Fragment>
    )
}

export default Login;