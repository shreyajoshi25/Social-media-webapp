import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        );

    const login = () =>{
        setCurrentUser({
            id:1,
            name:"John Doe",
            profilePicture: "https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg"
        }); 
    }

    useEffect(() => {
       localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}