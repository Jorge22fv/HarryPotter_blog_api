const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slytherinCharacters: [],
			hufflepuffCharacters: [],
			ravenclawCharacters: [],
			gryffindorCharacters: [],
		},
		actions: {
			getSlytherinCharacters: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://hp-api.onrender.com/api/characters/house/slytherin", requestOptions)
					.then(response => response.json())
					.then(result => setStore({
						slytherinCharacters: result
					}))
					.catch(error => console.log('error', error));
			},

			getHufflepufCharacters: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://hp-api.onrender.com/api/characters/house/hufflepuff", requestOptions)
					.then(response => response.json())
					.then(result => setStore({
						hufflepuffCharacters: result
					}))
					.catch(error => console.log('error', error));
			},

			getRavenclawCharacters: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://hp-api.onrender.com/api/characters/house/ravenclaw", requestOptions)
					.then(response => response.json())
					.then(result => setStore({
						ravenclawCharacters: result
					}))
					.catch(error => console.log('error', error));
			},

			getGryffindorCharacters: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://hp-api.onrender.com/api/characters/house/gryffindor", requestOptions)
					.then(response => response.json())
					.then(result => setStore({
						gryffindorCharacters: result
					}))
					.catch(error => console.log('error', error));
			},

		},
	}
};

export default getState;
