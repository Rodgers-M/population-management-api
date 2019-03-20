const db = require('../../database/models')

module.exports = async name => {
  const foundLocation = await db.Location.findOne({ where: { name }, raw: true })
  return foundLocation
}
