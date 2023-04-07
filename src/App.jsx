import React from "react";
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Login from "./Routes/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dentist/:id" element={<Detail />} />
                    <Route path="/favs" element={<Favs />} />
                    <Route path="/" element={<Navigate to={"/login"} />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
