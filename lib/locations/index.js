const createLocation = require('./createLocation')
const getLocationByName = require('./getLocationByName')
const listLocations = require('./listLocations')

class LocationsRepository {
  static createLocation (location) {
    return createLocation(location)
  }
  static getLocationByName(name) {
    return getLocationByName(name)
  }
  static listLocations() {
    return listLocations()
  }
}

module.exports = LocationsRepository
