import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../firebase-config";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);

     const login =  (email, password ) =>
     signInWithEmailAndPassword(auth, email, password);

     const logout =() => signOut(auth);

     const logInWithGoogle = () => {
         const googleProvider = new GoogleAuthProvider()
         return signInWithPopup(auth, googleProvider)

     }

     useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
             setUser(currentUser);
             setLoading(false)
         });
         return () =>unsuscribe();
     }, [])

    return (
        <authContext.Provider value={{ signup, login, user, logout, logInWithGoogle }}>
            {children}

        </authContext.Provider>
    )
}