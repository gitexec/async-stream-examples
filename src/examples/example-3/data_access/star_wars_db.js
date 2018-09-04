const { RedisDB } = require('../database_sources')

class StarWarsDB {
	storePlanetAsync(planet){
		RedisDB.storePlanet(planet).then((data) => {
			console.log('planet storee', data)
		})
	}

	getPlanets(){
		return RedisDB.getPlanet().then(data => {
			console.log(data)
		})
	}

}

module.exports = StarWarsDB
