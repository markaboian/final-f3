import React from "react";
import { routes, Login, Layout } from "./Navigation/Routes";
import { ContextProvider } from "./Components/utils/global.context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./Components/ProtectedRoutes";

function App() {

    return (
        <BrowserRouter>
            <ContextProvider>
                <div className="App">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route element={<Layout />}>
                                {
                                    routes.map(({ id, path, Component }) => {
                                        return (
                                            <Route key={id} path={path} element={<Component />} />
                                        )
                                    })
                                }
                            </Route>
                        </Route>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                    </Routes>
                </div>
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;
