const formatListLocationsResponse = require('./formatListLocationsResponse')

describe('#formattedListLocationsResponse', () => {
  test('should format a list of locations', () => {
    const locations = [{id:2, name: 'witu', males: 234, females: 434}]
    const formattedListLocationsResponse = formatListLocationsResponse(locations)
    expect(formattedListLocationsResponse[0]).toMatchObject({
      id: 2,
      total_males: 234,
      total_females: 434,
      total_residents: 668
    })
  })
})
