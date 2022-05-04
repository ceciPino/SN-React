import React from "react";
import { Fragment, useState } from "react";

const Login = (prop) => {
    return (
        <Fragment>
            <form>
                <input placeholder="Ingresa tu correo eléctronico">
                </input>
                <input placeholder="Ingresa tu contraseña">
                </input>

                <button type= "submit">Ingresar</button>
            </form>
        </Fragment>
    )
}

export default Login;