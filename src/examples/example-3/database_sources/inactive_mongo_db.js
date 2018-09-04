/*const Promise = require('bluebird')
const { Transform } = require('stream')
const MongoClient = Promise.promisifyAll(require('mongodb')).MongoClient
const Util = require('../util')
const url = 'mongodb://localhost:27017'
class MongoDB {
	contructor(){
		/*this.colletion = 'actors'*/
	}

	//Do I need to stream this? I dont think so. Small piece
	storeActor(actor){
		let person = actor
		MongoClient.connectAsync(url, { useNewUrlParser: true })
			.then(client => {
				console.log(`connected to mongo`)
				const db = client.db('starwarsdb')
				db.collection('actors').insertOneAsync(person, {})
				client.close()
			})
			.then((data) => {
				console.log('Actor inserted:: ', data)
			})
			.catch(error => console.log(`something happened ${error}`))
	}

	//TODO: make a stream for large sets
	async getAllActors(){
		//only await for connection
		const client = await MongoClient.connectAsync(url, { useNewUrlParser: true })
		const db = await client.db('starwarsdb')
		const collections =  db.collection('actors').find()
		client.close()
		return collections;
		/*try {
			const stream = db.collection('actors').find().stream()
			stream.pipe(new Transform({
			tranform: (chunk, enc, cb) => {
				//pass in the just required keys
				this.push(chunk)
				cb()
			}
			}))
			return Util.streamToPromise(stream)
		}
		finally {
			client.close()
		}*/
		
	}

}
module.exports = {
	MongoDB: new MongoDB()
}*/