


function addToMap(lat, long, events) {
  const coords = {
    latitude: lat,
    longitude: long,
  }
  events.push(coords);
  console.log("test adding");
}

module.exports = {addToMap}