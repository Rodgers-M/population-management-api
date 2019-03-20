const db = require('../../database/models')

module.exports = async => db.Location.findAll()
