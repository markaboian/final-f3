import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";

export const ProtectedRoutes = () => {
    const { state } = useContext(ContextGlobal)

    return state.isLogged ? <Outlet /> : <Navigate to="/login" />
}
