const request = require('superagent')
const Promise = require('bluebird')
const fs = require('fs')
const { Transform, Readable } = require('stream')
const Util = require('../util')
const { DBO } = require('../data_access')

class StarWarsAPIClient extends Readable {
  constructor(options){
    super()
    this.prevURL = null
    this.currentUrl = options.url
    this.mostPlanets = {name: '', population: Number.MIN_VALUE}
  }

  _read(size){
    if(this.prevURL != this.currentUrl){
      const promiseStream = this.makeRequest(this.currentUrl)
      promiseStream.then((planetBuffer) => {
        let result = JSON.parse(planetBuffer.toString())
        this.processBigChunkAsync(result).then((payload) => this.processLoad(payload))
        let nextAPIUrl = result.next
        if(nextAPIUrl){
          this.prevURL = this.currentUrl
          this.currentUrl = nextAPIUrl
          //Give a short time to OS to process/close pipe :()
          setTimeout(() => {
            this.push(this.currentUrl)
          }, 200)
        }
        else {
          //end streamming
          DBO.storePlanetAsync(JSON.stringify(this.mostPlanets))
          this.push(JSON.stringify(this.mostPlanets))
          this.push(null)
        }
      })
      .catch((error) => {
        console.log("something happened", error)
      })
    }
    else if (!this.currentUrl){
      this.push(null)
    }
  }

  makeRequest(url){
    //In case I need to pipe end result somewhere
    const passThrough = new Transform({
    transform(chunk, enc, cb) {
      //Only for debugging
/*      let now = new Date(Date.now()).toString()
      console.log("Processed on", now)*/
      this.push(chunk)
      cb()
    }
  })
    const streamReq = request.get(url)
    streamReq.pipe(passThrough)
    return Util.streamToPromise(passThrough) 
  }
  
  processBigChunkAsync(result){
    let payload = result
    return new Promise((resolve, reject) => {
      setTimeout((result) => {
        resolve(payload)
      }, 100)
    })
  }

  processLoad(payload){
    for(let planet of payload.results){
      let population = parseInt(planet.population)
      if(population > this.mostPlanets.population){
        this.mostPlanets.name = planet.name
        this.mostPlanets.population = population
      }
    }
    return this.mostPlanets
  }
}

module.exports = StarWarsAPIClient;
