export const validate = (taskName, date) => {
  if (taskName?.length > 0 && date) {
    return true
  }
  return false
}

export const getDateTime = (dateInMillis) => {
  const dateFormat = new Date(dateInMillis)
  const date = dateFormat.toLocaleDateString('en-US')
  const time = dateFormat.toLocaleTimeString('en-US')
  return { date, time }
}
const upcomingNumber = 3

export const objectSort = (tasksList) => {
  return tasksList
    .sort((a, b) => {
      return a.dateInMillis - b.dateInMillis
    })
    .slice(0, upcomingNumber)
}
export const todayDate = (name) => {
  const today = new Date().toISOString().slice(0, 16)
  return today
}
