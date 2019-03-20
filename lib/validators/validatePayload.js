const validatePayload = payload => {
  const errors = {}
  const requiredFields = ['name', 'females', 'males']
  requiredFields.forEach(field => {
    if(!payload[field].trim().length){
      errors[field] = `${field} is required`
    }
  })
  return errors
}
