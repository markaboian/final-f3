import React, { createContext, useReducer } from "react";

export const ContextGlobal = createContext({});

const handleDispatch = (state, { type }) => {
	switch (type) {
		case "LOGGED":
			sessionStorage.setItem("logged", JSON.stringify("yes"))
			return {
				...state,
				isLogged: true
			}

		case "LOGOUT":
			sessionStorage.clear()
			return {
				...state,
				isLogged: false
			}


		case "DARK":
			localStorage.setItem("theme", JSON.stringify("dark"))
			return {
				...state,
				theme: "dark"
			}

		default:
			return state;
	}
}

export const ContextProvider = ({ children }) => {
	//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

	const initialState = {
		isLogged: !!sessionStorage.getItem("logged"),
		theme: "",
		data: []
	}

	const [state, dispatch] = useReducer(handleDispatch, initialState)

	const propiedades = {
		state,
		dispatch
	}

	return (
		<ContextGlobal.Provider value={propiedades}>
			{children}
		</ContextGlobal.Provider>
	);
};
