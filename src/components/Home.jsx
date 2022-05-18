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


    return <div>
        <h1> Hola {user.displayName || user.email}! </h1>

        <button onClick={handleLogout}> Log Out </button>
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