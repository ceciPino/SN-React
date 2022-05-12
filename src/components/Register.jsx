import { Fragment, useState } from "react";

const Register = () => {
    return(
        <Fragment>
            <form>
                <input placeholder="ingresa tu nombre de usuario"></input>
                <input placeholder="ingresa tu correo electrónico"></input>
                <input placeholder="ingresa tu contraseña"></input>

                <button type="submit"> Registrarse</button>
            </form>
        </Fragment>
    );
}

export default Register;