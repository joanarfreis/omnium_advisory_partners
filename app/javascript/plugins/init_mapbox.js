/*import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');
  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-74.50, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
      });
  }
};

export { initMapbox };



/*
const markers = 
new mapboxgl.Marker()
.setLngLat([ 38.7223662,-9.1709844 ])
.addTo(map);
console.log(markers);
*/