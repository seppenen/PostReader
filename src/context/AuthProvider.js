import {createContext, useState} from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const sessionToken = sessionStorage.getItem("accessToken")
    const [accessToken, setAccessToken] = useState(sessionToken)

    return (
        <AuthContext.Provider value={{accessToken, setAccessToken}}>
            {children}
        </AuthContext.Provider>
    )
}
