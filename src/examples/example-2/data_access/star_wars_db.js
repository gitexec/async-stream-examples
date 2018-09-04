const { RedisDB } = require('../database_sources')

class StarWarsDB {
	storeActorAsync(actor){
		RedisDB.storeActor(actor).then((data) => {
			console.log('actor storee', data)
		})
	}

	getActors(){
		return RedisDB.getActor().then(data => {
			console.log(data)
		})
	}

}

module.exports = StarWarsDB
