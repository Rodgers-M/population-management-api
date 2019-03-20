const responseHelper = require('./responseHelper')
const{  mockResponse } = require('mock-req-res')

const res = mockResponse({
  status: jest.fn(),
  json: jest.fn()
})

describe('#responseHelper', () => {
  describe('#handleSuccess', () => {
    test('should call res.status and res.json passing given arguments', () => {
      responseHelper.handleSuccess(res, 200, 'success')
      expect(res.json).toHaveBeenCalledWith({message: 'success'})
    })
  })
  describe('#handleSuccessResult', () => {
    test('should call res.json passing given arguments', () => {
      responseHelper.handleSuccessResult(res, 200, {results: 'some results'})
      expect(res.json).toHaveBeenCalledWith({message: 'success', results: { results: 'some results'}})
    })
  })
  describe('#handleFailure', () => {
    test('should call res.status and res.json passing given arguments', () => {
      responseHelper.handleFailure(res, 400, {message: 'invalid data in request' })
      expect(res.json).toHaveBeenCalledWith({ message: 'invalid data in request'  })
    })
  })
})
