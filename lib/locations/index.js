const createLocation = require('./createLocation')
const getLocationByName = require('./getLocationByName')

class LocationsRepository {
  static createLocation (location) {
    return createLocation(location)
  }
  static getLocationByName(name) {
    return getLocationByName(name)
  }
}
