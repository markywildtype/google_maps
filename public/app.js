const handleButtonClick = function(){
  console.log(this);
  this.googleMap.setCenter({lat: 40.731412, lng: -73.996985})
};


const initialize = function(){

  const center = {lat: 55.942268, lng: -3.220371}
  const mapDiv = document.getElementById('main-map');
  const zoom = 17;

  const mainMap = new MapWrapper(center, mapDiv, zoom);

  const lidlMarker = {lat: 55.941396, lng: -3.221508}
  mainMap.addMarker(lidlMarker);

  //Dominos marker + infowindow
  const dominosMarker = {lat: 55.942978, lng: -3.220676}
  const dominos = mainMap.addMarker(dominosMarker);

  const infoWindow = new google.maps.InfoWindow({
    content: '<div style="width:200px;">This is where, if he could (without becoming horrifically obese and risking heart disease and death), Marky would eat all the time. He lives directly opposite after all. As it is, it is merely an occasional delicious treat.</div>'
  });

  dominos.addListener('click', function(){
    infoWindow.open(this.mainMap, dominos);
  });
  //end Dominos marker

  mainMap.addClickEvent();

  const button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick.bind(mainMap));
}






document.addEventListener('DOMContentLoaded', initialize);
