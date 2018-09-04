const { DBO } = require('../data_access')
const Promise = require('bluebird')
const Util = require('../util')

class PlanetInterface {
	async readPlanetInMostFilms(){
		const planet = await DBO.getPlanets()
		return planet
	}
}
module.exports = PlanetInterface