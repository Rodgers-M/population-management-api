const createLocation = require('./createLocation')
const getLocationByName = require('./getLocationByName')
const listLocations = require('./listLocations')
const updateLocation = require('./updateLocation')
const getLocationById = require('./getLocationById')
const deleteLocation = require('./deleteLocation')

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
  static updateLocation(locationToUpdate, id) {
    return  updateLocation(locationToUpdate, id)
  }
  static getLocationById(id) {
    return getLocationById(id)
  }
  static deleteLocation(id) {
    return deleteLocation(id)
  }
}

module.exports = LocationsRepository
