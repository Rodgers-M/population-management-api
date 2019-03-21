const formattedLocationResponse = require('./formatGetLocationResponse')

describe('#formattedLocationResponse', () => {
  test('should return location with the desired fields', () => {
    const location = {
      id: 2,
      name: 'area5',
      males: 234,
      females: 434
    }
    const formattedLocation = formattedLocationResponse(location)
    expect(formattedLocation).toMatchObject({
      id: 2,
      total_males: 234,
      total_females: 434,
      total_residents: 668
    })
  })
})
