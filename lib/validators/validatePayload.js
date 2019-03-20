module.exports = (payload) => {
  const errors = {}
  const requiredFields = ['name', 'females', 'males']
  requiredFields.forEach(field => {
    if(!payload[field]){
      errors[field] = `error, ${field} is required`
    } else if (!payload[field].toString().trim().length) {
      errors[field] = `error, ${field} can not be blank`
    }
  })
  return errors
}
