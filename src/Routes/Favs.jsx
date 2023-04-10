import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {

	const { state } = useContext(ContextGlobal)

	return (
		<>
			<h1>Dentists Favs</h1>
			<div className="card-grid">
				{
					state.data.map(({name, username, id}) => {
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
