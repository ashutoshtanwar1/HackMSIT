
function myMap() {
  var mapCanvas = document.getElementById("map");
  var myLatLng = {
    lat: 55.81535771,
    lng: 37.57557158
  };
  var mapOptions = {
    center: new google.maps.LatLng(55.8153573, 37.57557158),
    zoom: 17
  };

  if (window.innerWidth < 992) {
    mapOptions = {
      center: new google.maps.LatLng(55.8153573, 37.57557158),
      zoom: 17
    };
  };

  var image = {
    url: 'img/pointermap.png',
    scaledSize: new google.maps.Size(110, 89),
    anchor: new google.maps.Point(20, 90)
  };

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
  var map = new google.maps.Map(mapCanvas, mapOptions);
  marker.setMap(map);
  google.maps.event.addListener(marker, 'click', function() {
    window.location.href = "https://goo.gl/maps/9iw8NKyj8o22";
  });
}


var platform = new H.service.Platform({
  app_id: 'DNb4CcnREaMGv2zJU1OK',
  app_code: 'Xk6tENlpUnStqNCDDgOjtw',
  useCIT: true,
  useHTTPS: true
});

var defaultLayers = platform.createDefaultLayers();

var map;

map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map,{
      center: {lat:55.8159573, lng: 37.57557158},
      zoom: 16
});

map.setBaseLayer(defaultLayers.terrain.map);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


var ui = H.ui.UI.createDefault(map, defaultLayers);
var icon = new H.map.Icon('img/pointermap.png', { anchor: {x:25, y:92 }, size: {w:110, h:89}});

var marker = new H.map.Marker({ lat: 55.81535771, lng: 37.57557158}, { icon: icon });
map.addObject(marker);
