const { StarWarsControllers } = require('../control_flow')
StarWarsControllers.downloadAllPlanets('https://swapi.co/api/planets')
setTimeout(() => {
	console.log("reeeaddd", StarWarsControllers)
	StarWarsControllers.getPlanetInMostFilms()

}, 20000)
