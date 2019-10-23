import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');
  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center:[-9.1709844, 38.7223662], // starting position [lng, lat]
      zoom: 14 // starting zoom
      });
    
    var marker = new mapboxgl.Marker()
                .setLngLat([ -9.1709844, 38.7223662 ])
                .addTo(map);
    }
};

export { initMapbox };
