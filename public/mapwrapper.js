const MapWrapper = function(coords, container, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    const x = event.latLng.lat();
    const y = event.latLng.lng();
    const coords = {lat: x, lng: y}
    this.addMarker(coords); 
  }.bind(this));
};
