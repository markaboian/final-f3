import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { ContextGlobal } from '../Components/utils/global.context'



const Navbar = () => {

	const { state, dispatch } = useContext(ContextGlobal)

	const handleLogOut = () => {
		dispatch({ type: "LOGOUT" })
	}

	const handleTheme = () => {
		if (state.theme === "dark") {
			dispatch({ type: "LIGHT" })
		}
		else{
			dispatch({ type: "DARK" })
		}
	}
	return (
		<nav>
			<button onClick={handleTheme} style={{backgroundColor: "red", border: "1px solid red", borderRadius: "10px", padding: "10px", color: "white", fontWeight: "bold", fontFamily: "Helvetica, Arial, sans-serif", cursor: "pointer"}}>Change theme</button>
			<ul style={{ listStyleType: "none", margin: 0, marginTop: "10px", padding: 0 }}>
				<Link to={"/home"} style={{ marginRight: "50px", backgroundColor: 'black', color: "white", padding: "5px 20px", borderRadius: "10px" }}>Home</Link>
				<Link to={"/contact"} style={{ marginRight: "50px", backgroundColor: 'black', color: "white", padding: "5px 20px", borderRadius: "10px" }}>Contact</Link>
				<Link to={"/favs"} style={{ marginRight: "50px", backgroundColor: 'black', color: "white", padding: "5px 20px", borderRadius: "10px" }}>Favs</Link>
			</ul>
			<button onClick={handleLogOut} style={{backgroundColor: "red", border: "1px solid red", borderRadius: "10px", padding: "10px", color: "white", fontWeight: "bold", fontFamily: "Helvetica, Arial, sans-serif", cursor: "pointer"}}>Log Out</button>
		</nav>
	)
}

export default Navbar