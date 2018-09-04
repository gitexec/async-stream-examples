const { StarWarsControllers } = require('../control_flow')
StarWarsControllers.downloadAllActors('https://swapi.co/api/people/')
setTimeout(() => {
	console.log("reeeaddd", StarWarsControllers)
	StarWarsControllers.getActorInMostFilms()

}, 20000)
