const apiKey = mapApiKey; 

  var map = new maplibregl.Map({
    container: 'map',
    
    style: `https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=${apiKey}`,
    center: listing.geometry.coordinates, // [lng, lat]
    zoom: 9
  });

new maplibregl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new maplibregl.Popup({ offset: 25 }) 
    .setHTML(`<h4>${listing.title}</h4><p>exact location provided after booking </p>`)) 
  .addTo(map);

  map.addControl(new maplibregl.NavigationControl());