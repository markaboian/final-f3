import React, { createContext, useReducer } from "react";

export const ContextGlobal = createContext({});

const existsInFavorites = (favs, id) => {
	return favs.find((dentist) => {
		if (id === dentist.id) {
			return true
		}
		else{
			return false
		}
	})
}

const handleDispatch = (state, { type, payload }) => {
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

		case "LIGHT":
			localStorage.removeItem("theme")
			return {
				...state,
				theme: null
			}

		case "FAVS":
			if (existsInFavorites(state.data, payload.id)) {
				alert("Dentist already in favorites")
			} else{
				localStorage.setItem("favorites", JSON.stringify([...state.data, payload]))
				alert("Dentist added to favorites")
				return {
					...state,
					data: [...state.data, payload]
				}	
			}

		default:
			return state;
	}
}

export const ContextProvider = ({ children }) => {

	const initialState = {
		isLogged: !!sessionStorage.getItem("logged"),
		theme: localStorage.getItem("theme"),
		data: !JSON.parse(localStorage.getItem("favorites")) ? [] : JSON.parse(localStorage.getItem("favorites"))
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
