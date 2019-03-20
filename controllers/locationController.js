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
      if(Object.keys(errors).length) return handleFailure(
        res,
      HttpStatus.UNPROCESSABLE_ENTITY,
      {message: errors},
      )
      if(parentLocation) {
        const foundLocation = await LocationsRepository.getLocationByName(parentLocation)
        if(!foundLocation) return handleFailure(
          res,
          HttpStatus.NOT_FOUND,
          {message: 'parentLocation not found, please provide valid location'},
        )
      } 
      await LocationsRepository.createLocation(req.body)
    } catch(error) {
      return handleFailure(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
}
