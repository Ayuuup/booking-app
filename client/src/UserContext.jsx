import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext({})

export function UserContextProvider({children}){

    useEffect(()=>{
        if(!user){
            axios.get("/profile").then((response)=>{
                const {data} = response
                setUser(data)
            })
            
        }
    },[])

    const [user,setUser] = useState(null)

    return <userContext.Provider value={{user,setUser}}>
        {children}
    </userContext.Provider>
}