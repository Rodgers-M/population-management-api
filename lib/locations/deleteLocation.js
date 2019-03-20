const db = require('../../database/models')

module.exports = async (id) => db.Location.destroy({where : {id}})
