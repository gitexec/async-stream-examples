const { DBO } = require('../data_access')
const Promise = require('bluebird')
const Util = require('../util')

class PeopleInterface {
	readActorInMostFilms(){
		const actor = await DBO.getActors()
		return actor
	}
}
module.exports = PeopleInterface