const { StarWarsAPIClient, PlanetInterface } = require('../business_logic')

class StarWarsControllers {
	downloadAllPlanets(url = 'https://swapi.co/api/planets'){
		//initiate stream of data
		const consume = new StarWarsAPIClient({url})
		console.log(consume)
		consume.pipe(process.stdout)
	}

	getPlanetInMostFilms(){
		//If await would halt
		PlanetInterface.readPlanetInMostFilms()
	}
}

module.exports = StarWarsControllers