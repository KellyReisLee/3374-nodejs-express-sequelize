module.exports = (objectParams) => {
  for (let prop in objectParams) {
    if (/Id|id/.test(prop)) {
      objectParams[prop] = Number(objectParams[prop])
    }
  }
  return objectParams
}