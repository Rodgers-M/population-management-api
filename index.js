const logger = require('fancy-log')
const app = require('./app/app')
const config = require('./config/config')

const { port } = config
app.listen(port, () => {
  logger.info('App running on port', port)
  logger.info('db name', config.databaseName)
})

