const markerMaker = require('./marker')
console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYW5qaWVtZXJjaGFudCIsImEiOiJjamQxdHdyanoxa2RmMnpvNGc3NjAzZHV2In0.WxWbLVeEZjWn_76BY9YxzQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = markerMaker.markerMaker("activity", [-74.009151, 40.705086]);
marker.addTo(map);


