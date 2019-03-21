const HttpStatus = require('http-status')

const locationRoutes = require('./locationRoutes')

const routes = app => {
  app.use('/locations', locationRoutes)
  app.get('/', (req, res) => res.status(HttpStatus.OK).json({message: 'welcome to the population management AP'}))
  //any route apart from the above defined
  app.use('*', (req, res) => res.status(HttpStatus.NOT_FOUND).json({message:'path not found, please check and try again'}))
  return app
}

module.exports = routes
