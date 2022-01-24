import {Outlet, Navigate} from "react-router-dom";
import {useContext, useEffect,} from "react";
import {AuthContext} from "../context/AuthProvider";

export function RequireAuth () {
    const {accessToken} = useContext(AuthContext)
        return accessToken ? <Outlet/> : <Navigate to ="/login" />
}
