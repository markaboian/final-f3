import Login from "../Routes/Login";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Contact from "../Routes/Contact";
import Favs from "../Routes/Favs";
import Layout from "../Routes/Layout";

export const routes = [
    {
        id: 1,
        path: "/home",
        Component: Home
    },
    {
        id: 2,
        path: "/dentist:id",
        Component: Detail
    },
    {
        id: 3,
        path: "/contact",
        Component: Contact
    },
    {
        id: 4,
        path: "/favs",
        Component: Favs
    }
]

export { Login, Layout };