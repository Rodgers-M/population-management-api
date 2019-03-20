const pushid = require('pushid')
const HttpStatus = require('http-status')
const validatePayload = require('../lib/validators/validatePayload')
const { handleSuccess, handleFailure, handleSuccessResult } = require('../lib/helpers/responseHelper')
const LocationsRepository = require('../lib/locations')
const formatGetLocationResponse = require('../lib/adapters/formatGetLocationResponse')
const formatListLocationsResponse = require('../lib/adapters/formatListLocationsResponse')

class LocationController {
  static async createLocation(req, res) {
    try {
      const { name, females, males, parentLocation } = req.body
      const errors = validatePayload(req.body)
      const existingLocation = await LocationsRepository.getLocationByName(name.toLowerCase())
      if(existingLocation) errors.name = 'A location with that name already exists'
      if(Object.keys(errors).length) return handleFailure(
        res,
      HttpStatus.UNPROCESSABLE_ENTITY,
      {message: errors},
      )
      if(parentLocation) {
        const foundLocation = await LocationsRepository.getLocationByName(parentLocation.toLowerCase())
        if(!foundLocation) return handleFailure(
          res,
          HttpStatus.NOT_FOUND,
          {message: 'parentLocation not found, please provide valid location'},
        )
        req.body.parentLocation = foundLocation.id
      } 
      const id = pushid()
      await LocationsRepository.createLocation({id, ...req.body, name: name.toLowerCase()})
      return handleSuccess(res, HttpStatus.OK, 'location created successfuly')
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
  static async getLocationByName(req, res) {
    try {
      const { name } = req.params
      const location = await LocationsRepository.getLocationByName(name)
      if(!location) return handleFailure(res, HttpStatus.NOT_FOUND, { message: 'location with given name not found' })
      const formattedLocation = formatGetLocationResponse(location)
      return handleSuccessResult(res, HttpStatus.OK, formattedLocation)
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
  static async getLocationById(req, res) {
    try {
      const { id } = req.params
      const location = await LocationsRepository.getLocationById(id)
      if(!location) return handleFailure(res, HttpStatus.NOT_FOUND, { message: 'location with given Id not found' })
      const formattedLocation = formatGetLocationResponse(location)
      return handleSuccessResult(res, HttpStatus.OK, formattedLocation)
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }

  }
  static async listLocations(req, res) {
    try {
      const locations = await LocationsRepository.listLocations()
      const formattedLocations = formatListLocationsResponse(locations)
      return handleSuccessResult(res, HttpStatus.OK, formattedLocations)
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
  static async updateLocation(req, res) {
    try {
      const { id } = req.params
      const location = await LocationsRepository.getLocationById(id)
      if(!location) return handleFailure(res, HttpStatus.NOT_FOUND, { message: 'location with given Id not found' })
      const locationToUpdate = req.body
      await LocationsRepository.updateLocation(locationToUpdate, id)
      return handleSuccess(res, HttpStatus.OK, 'location updated successfuly')
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
}

module.exports = LocationController
