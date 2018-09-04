const StarWarsAPIClient = require('./fetch_all_results')
const PeopleInterface = require('./people_interface')

module.exports = {
	StarWarsAPIClient,
	PeopleInterface: new PeopleInterface()
}