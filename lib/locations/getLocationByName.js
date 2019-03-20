const db = require('../../database/models')

module.exports = async name => db.Location.findOne({ where: { name } })
