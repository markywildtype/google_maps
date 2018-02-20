const initialize = function(){

const center = {lat: 55.942268, lng: -3.220371}
const mapDiv = document.getElementById('main-map');
const zoom = 17;

const mainMap = new MapWrapper(center, mapDiv, zoom);

const dominosMarker = {lat: 55.942978, lng: -3.220676}
const lidlMarker = {lat: 55.941396, lng: -3.221508}

mainMap.addMarker(dominosMarker);
mainMap.addMarker(lidlMarker);

mainMap.addClickEvent();

}






document.addEventListener('DOMContentLoaded', initialize);
