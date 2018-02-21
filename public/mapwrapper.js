const MapWrapper = function(coords, container, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    title: "Helloooooooooo!",
    label: "Marky was here",
    draggable: true
  });
  return marker;
  // const infoWindow = new google.maps.InfoWindow({
  //   content: "Would probably be a good idea to make this dynamic in some way, eh?"
  // });
  //
  // marker.addListener('click', function(){
  //   infoWindow.open(this.googleMap, marker);
  // });


  // marker.setAnimation(google.maps.Animation.BOUNCE);
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    const x = event.latLng.lat();
    const y = event.latLng.lng();
    const coords = {lat: x, lng: y}
    this.addMarker(coords);
  }.bind(this));
};
