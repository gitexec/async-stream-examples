const StarWarsAPIClient = require('./fetch_all_results')
const PlanetInterface = require('./planet_interface')

module.exports = {
	StarWarsAPIClient,
	PlanetInterface: new PlanetInterface()
}