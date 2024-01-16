// appContext.js
import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions },
						favoritos: updatedStore.favoritos || [] // Asegurar que favoritos está siempre presente
					})
			})
		);

		const agregarAFavoritos = (character) => {
			const existeEnFavoritos = state.favoritos.find(item => item.id === character.id);
			if (!existeEnFavoritos) {
				const nuevosFavoritos = [...state.favoritos, character];
				setStore({ favoritos: nuevosFavoritos });
			}
		};

		const eliminarDeFavoritos = (character) => {
			const nuevosFavoritos = state.favoritos.filter(item => item.id !== character.id);
			setStore({ favoritos: nuevosFavoritos });
		};

		const setStore = (updatedStore) => {
			setState({
				store: Object.assign(state.store, updatedStore),
				actions: { ...state.actions },
				favoritos: updatedStore.favoritos || [] // Asegurar que favoritos está siempre presente
			});
		};

		useEffect(() => {
			state.actions.getSlytherinCharacters();
			state.actions.getHufflepufCharacters();
			state.actions.getRavenclawCharacters();
			state.actions.getGryffindorCharacters();
		}, []);

		return (
			<Context.Provider value={{ ...state, agregarAFavoritos, eliminarDeFavoritos, setStore }}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
