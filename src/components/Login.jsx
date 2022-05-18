import { Fragment, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { login, logInWithGoogle, resetPassword } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();


    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value })


    const handleSubmit = async e => {
        e.preventDefault();
        setError('')
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            //console.log(error.code);
            //aquí podemos manejar los errores de forma que se imprima el mensaje en pantalla
            //if(error.code === "auth/internal-error") {
            //setError("correo invalido")
            //}
            setError(error.message);
        }

    };

    const handleGoogleSignin = async () => {
        try {
            await logInWithGoogle()
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    };

    const handleResetPassword = async () => {
         if (!user.email) return setError("Ingresa tu correo electrónico");
         try {
             await resetPassword(user.email);
             setError("te hemos enviado un correo para recuperar tu contraseña ;)");

         } catch (error) {
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

                    <div className="flex items-center justify-between">
                    <button
                        className="bg-violet-200 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded
                        focus:outline-none focus:shadow-outline"
                        type="submit"> Ingresar
                    </button>

                    <a
                        href="#!"
                        className="inline-block align-center py-2 px-20 text-justify text-sm text-violet-200 hover:text-violet-500"
                        onClick={handleResetPassword}
                        >¿Olvidaste tu Contraseña?
                    </a>

                    </div>

                </form>

                <button
                    onClick={handleGoogleSignin}
                    className="bg-orange-100 hover:bg-orange-200 text-black shadow-md 
                    rounded border-2 border-gray-300 py-2 px-4 w-full"> Login with Google
                </button>

                <p
                    className="text-violet-300 my-4 text-sm flex justify-center px-6"> ¿No tienes una cuenta?
                    <Link to="/register" className="pl-3"> Regístrate </Link>
                </p>
            </Fragment>
        </div>

    );
}

export default Login;