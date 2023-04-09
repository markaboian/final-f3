import React from "react";
import Card from "../Components/Card";

const Favs = () => {

	const favorites = JSON.parse(localStorage.getItem("favorites"))

	return (
		<>
			<h1>Dentists Favs</h1>
			<div className="card-grid">
				{
					favorites.map(({name, username, id}) => {
						return (
							<Card key={id} name={name} username={username}/>
						)
					})
				}
			</div>
		</>
	);
};

export default Favs;
