import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, value }) => {

	const { dispatch } = useContext(ContextGlobal)

	const addFav = () => {
		alert("Dentist added to favorites")
		dispatch({ type: "FAVS", payload: value})
	}

	return (
		<div className="card">
			<Link to={`/dentist/${id}`}>
				<img src="./images/doctor.jpg" alt="doctor" style={{ width: "150px", height: "150px" }} />
			</Link>
			<h1 style={{fontSize: "1.2em"}}>{name}</h1>
			<p>{username}</p>
			<button onClick={addFav} className="favButton">Add fav</button>
		</div>
	);
};

export default Card;
