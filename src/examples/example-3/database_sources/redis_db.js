const Promise = require('bluebird')
const redis = Promise.promisifyAll(require('redis'))
const client = redis.createClient()

class RedisDB {
	contructor(){
		/*this.colletion = 'planets'*/
	}

	//Do I need to stream this? I dont think so. Small piece
	storePlanet(planet){
		return client.setAsync('freqly_planet', planet.toString())
	}

	//TODO: make a stream for large sets
	async getPlanet(){
		return client.getAsync('freqly_planet')		
	}

}
module.exports = RedisDB