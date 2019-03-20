const router = require('express').Router()
const LocationController = require('../../controllers/locationController')

router.get('/', LocationController.listLocations)
router.get('/name/:name', LocationController.getLocationByName)
router.get('/:id', LocationController.getLocationById)
router.post('/', LocationController.createLocation)
router.put('/:id', LocationController.updateLocation)
router.delete('/:id', LocationController.deleteLocation)

module.exports = router
