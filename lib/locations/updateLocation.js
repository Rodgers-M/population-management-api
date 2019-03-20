const db = require('../../database/models')

module.exports = async (locationToUpdate, id) => db.Location.update(locationToUpdate, {where : {id}})
