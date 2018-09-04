const Promise = require('bluebird')
const redis = Promise.promisifyAll(require('redis'))
const client = redis.createClient()

class RedisDB {
	contructor(){
		/*this.colletion = 'actors'*/
	}

	//Do I need to stream this? I dont think so. Small piece
	storeActor(actor){
		return client.setAsync('freqly_actor', actor.toString())
	}

	//TODO: make a stream for large sets
	async getActor(){
		return client.getAsync('freqly_actor')		
	}

}
module.exports = RedisDB