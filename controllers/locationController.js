const pushid = require('pushid')
const HttpStatus = require('http-status')
const validatePayload = require('../lib/validators/validatePayload')
const { handleSuccess, handleFailure, handleSuccessResult } = require('../lib/helpers/responseHelper')
const LocationsRepository = require('../lib/locations')

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
      return handleSuccessResult(res, HttpStatus.OK, location)
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
  static async listLocations(req, res) {
    try {
      const locations = await LocationsRepository.listLocations()
      return handleSuccessResult(res, HttpStatus.OK, locations)
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
}

module.exports = LocationController
