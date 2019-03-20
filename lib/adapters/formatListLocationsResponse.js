const formatGetLocationResponse = require('./formatGetLocationResponse')

module.exports = locations => {
  const formattedLocations = locations.map(location => {
    const formattedLocation = formatGetLocationResponse(location)
    return formattedLocation
  })
  return formattedLocations
}
