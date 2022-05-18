import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Home() {
    const { user, logout, loading } = useAuth()
    const navigate = useNavigate()
    console.log(user);

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    if (loading) return <h1> loading </h1>;


    return <div className="w-full max-w-xs m-auto text-violet-400">
        <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4"> Hola {user.displayName || user.email}! </h1>
        </div>

        <button onClick={handleLogout} className="bg-violet-200 hover:bg-violet-400 rounded py-2 px-4 text-gray-700"> Log Out </button>
    </div>;
}



/*const Home = (prop) => {
    return (
        <div> 
            <Login/>
        </div>
    )
}
*/
export default Home;