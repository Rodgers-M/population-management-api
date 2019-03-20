const db = require('../../database/models')

module.exports = async id => db.Location.findByPk(id, { attributes: ['id', 'name', 'males', 'females'], raw: true })

