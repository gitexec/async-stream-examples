const StarWarsAPIClient = require('./load')
const consume = new StarWarsAPIClient({url: 'https://swapi.co/api/people/'})

consume.pipe(process.stdout)