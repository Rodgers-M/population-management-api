const validatePayload = require('./validatePayload')

describe('#validatePayload', () => {
  test('should return empty error object if payload is valid', () => {
    const payload = { name: 'myname', females: 200, males: 300 }
    const errors = validatePayload(payload)
    expect(errors).toMatchObject({})
  })
})
