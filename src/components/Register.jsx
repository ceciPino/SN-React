import { Fragment, useState } from "react";
import { useAuth } from "../context/authContext";
import {useNavigate} from "react-router-dom";

export function Register() {
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password:"", 
    });

    const { signup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] =useState();


    const handleChange = ({target: {name, value}}) =>
        setUser({...user, [name]:value})
    

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message);

        }
        
    }


    return(
        <div>

            {error && <p>{error}</p>}

<Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ingresa tu nombre de usuario" name="nombre" onChange={handleChange}></input>
                <input type="email" placeholder="ingresa tu correo electrónico" name="email" onChange={handleChange}></input>
                <input type="password" placeholder="ingresa tu contraseña" name="password" onChange={handleChange}></input>

                <button type="submit"> Registrarse</button>
            </form>
        </Fragment>
        </div>
       
    );
}

export default Register;