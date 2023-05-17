import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")|| null));

    const login = async(inputs)=>{
        const res = await axios.post("http://localhost:8800/backend/auth/login", inputs);
        setCurrentUser(res.data);
    }

    const logout = async(inputs)=>{
        const res = await axios.post("http://localhost:8800/backend/auth/logout");
        setCurrentUser(null);
    }

    const clue1 = async(inputs)=>{
        // const res = await axios.post("http://localhost:8800/backend/auth/clue1", inputs);
    }
    const clue2 = async(inputs)=>{
        // const res = await axios.post("http://localhost:8800/backend/auth/clue1", inputs);
    }
    const clue3 = async(inputs)=>{
        // const res = await axios.post("http://localhost:8800/backend/auth/clue1", inputs);
    }
    const clue4 = async(inputs)=>{
        // const res = await axios.post("http://localhost:8800/backend/auth/clue1", inputs);
    }
    const clue5 = async(inputs)=>{
        // const res = await axios.post("http://localhost:8800/backend/auth/clue1", inputs);
    }
    const clue6 = async(inputs)=>{
        // const res = await axios.post("http://localhost:8800/backend/auth/clue1", inputs);
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return <AuthContext.Provider value={{currentUser, login, logout, clue1, clue2, clue3, clue4, clue5, clue6 }}>{children}</AuthContext.Provider>
    
}

