import { useAuth } from "../context/authContext";

export function Home() {
   const {user} = useAuth()
   console.log(user);
    return <div>home</div>;
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