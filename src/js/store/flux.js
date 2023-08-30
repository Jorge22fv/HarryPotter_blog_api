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

				fetch(process.env.Slytherin, requestOptions)
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

				fetch(process.env.Hufflepuff, requestOptions)
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

				fetch(process.env.Ravenclaw, requestOptions)
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

				fetch(process.env.Gryffindor, requestOptions)
					.then(response => response.json())
					.then(result => setStore({
						gryffindorCharacters: result
					}))
					.catch(error => console.log('error', error));
			},

		}
	};
};

export default getState;
