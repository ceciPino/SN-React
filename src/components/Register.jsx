import { Fragment, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password: "",
    });

    const { signup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();


    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value })


    const handleSubmit = async e => {
        e.preventDefault();
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            //console.log(error.code);

            //aquí podemos manejar los errores de forma que se imprima el mensaje en pantalla
            //if(error.code === "auth/internal-error") {
            //setError("correo invalido")
            //}

            setError(error.message);
        }
    }

    return (
        <div className="w-full max-w-xs m-auto">
            {error && <p>{error}</p>}

            <Fragment>
                <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
                    <div className="mb-4">
                        <input
                            className="shadow appearence-none border rounded w-full py-2 px-3 
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="ingresa tu nombre de usuario"
                            name="nombre"
                            onChange={handleChange}>
                        </input>
                    </div>

                    <div className="mb-4">
                        <input
                            className="shadow appearence-none border rounded w-full py-2 px-3 
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="ingresa tu correo electrónico"
                            name="email"
                            onChange={handleChange}>
                        </input>
                    </div>

                    <div className="mb-4">
                        <input
                            className="shadow appearence-none border rounded w-full py-2 px-3 
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="ingresa tu contraseña"
                            name="password"
                            onChange={handleChange}>
                        </input>

                    </div>

                    <button
                        className="bg-violet-200 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded focus:outline-none 
                        focus:shadow-outline"
                        type="submit"> Registrarse
                    </button>

                    <p
                    className="text-violet-300 my-4 text-sm flex justify-center px-6"> ¿Ya tienes una cuenta?
                    <Link to="/login" className="pl-3"> Inicia Sesión </Link>
                </p>
                </form>
            </Fragment>
        </div>

    );
}

export default Register;