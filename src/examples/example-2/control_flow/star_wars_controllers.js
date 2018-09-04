const { StarWarsAPIClient, PeopleInterface } = require('../business_logic')

class StarWarsControllers {
	downloadAllActors(url = 'https://swapi.co/api/people'){
		//initiate stream of data
		const consume = new StarWarsAPIClient({url})
		console.log(consume)
		consume.pipe(process.stdout)
	}

	//TODO. Download single maybe not
	downloadActor(url = 'https://swapi.co/api/people'){

	}

	getActorInMostFilms(){
		//If await would halt
		PeopleInterface.readActorInMostFilms()
	}
}

module.exports = StarWarsControllers