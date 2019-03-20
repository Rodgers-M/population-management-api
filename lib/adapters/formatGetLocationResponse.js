module.exports = location => {
  const formattedLocation = {
    id: location.id,
    name: location.name,
    total_males : location.males,
    total_females : location.females,
    total_residents: location.males + location.females
  }
  return formattedLocation
}
