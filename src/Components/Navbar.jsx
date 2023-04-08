import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

	const { dispatch } = useContext(ContextGlobal)

	const handleLogOut = () => {
		dispatch({ type: "LOGOUT" })
	}

	const handleTheme = () => {
		dispatch({ type: "DARK" })
	}
	return (
		<nav>
			{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
			{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
			<button onClick={handleTheme}>Change theme</button>
			<ul style={{ listStyleType: "none", margin: 0, marginTop: "10px", padding: 0 }}>
				<Link to={"/home"} style={{ marginRight: "50px" }}>Home</Link>
				<Link to={"/contact"} style={{ marginRight: "50px" }}>Contact</Link>
				<Link to={"/favs"} style={{ marginRight: "50px" }}>Favs</Link>
			</ul>
			<button onClick={handleLogOut}>Log Out</button>
		</nav>
	)
}

export default Navbar