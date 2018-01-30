const mapboxgl = require("mapbox-gl");

const markerMaker = (type, coordinates) => {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === "activity") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === "hotel") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === "restaurant") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = {
  markerMaker
}

/*
// creating a dom element
var markerDomEl = document.createElement('div');
markerDomEl.classList.add('marker');
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// pass the dom element as a parameter to the mapboxgl.Marker() constructor fxn.
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);


*/
