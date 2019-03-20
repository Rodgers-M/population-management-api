const router = require('express').Router()
const LocationController = require('../../controllers/locationController')

router.get('/', LocationController.listLocations)
router.get('/name/:name', LocationController.getLocationByName)
router.post('/', LocationController.createLocation)

module.exports = router
