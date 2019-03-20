const db = require('../../database/models')

module.exports = async location => db.Location.create(location)
