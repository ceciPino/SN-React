import { Fragment, useState } from "react";
import { useAuth } from "../context/authContext";

export function Register() {
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password:"", 
    });
    const { signup } = useAuth()

    const handleChange = ({target: {name, value}}) =>
        setUser({...user, [name]:value})
    

    const handleSubmit = e => {
        e.preventDefault()
        signup(user.email, user.password)
    }


    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ingresa tu nombre de usuario" name="nombre" onChange={handleChange}></input>
                <input type="email" placeholder="ingresa tu correo electrónico" name="email" onChange={handleChange}></input>
                <input type="password" placeholder="ingresa tu contraseña" name="password" onChange={handleChange}></input>

                <button type="submit"> Registrarse</button>
            </form>
        </Fragment>
    );
}

export default Register;