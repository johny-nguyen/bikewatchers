// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';


// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uMDA5IiwiYSI6ImNtcDU4ZTEwNjB4MGEyc29ha3ZuMHFkb2cifQ.XfXWw8K6bjh05Ug9VTkD0g';





// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/jon009/cmp64x8ju000q01sp7wgm6mrx', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});


map.on('load', async () => {
  //code
  
  map.addSource('boston_route', {
  type: 'geojson',
  data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson',

  });

map.addLayer({
  id: 'bike-lanes',
  type: 'line',
  source: 'boston_route',
  paint: {
    'line-color': 'green',
    'line-width': 3,
    'line-opacity': 0.4,
  },
  });
});