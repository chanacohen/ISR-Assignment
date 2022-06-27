var new_york_map = L.map('new_york_map').setView(newYorkCords[4].coordinates, 12);

var empire_state_marker = L.marker(newYorkCords[0].coordinates).addTo(new_york_map);
var statue_of_liberty_marker = L.marker(newYorkCords[1].coordinates).addTo(new_york_map);
var central_park_marker = L.marker(newYorkCords[2].coordinates).addTo(new_york_map);
var times_square_marker = L.marker(newYorkCords[3].coordinates).addTo(new_york_map);

var empire_state_popup = L.popup();
var statue_of_liberty_popup = L.popup();
var central_park_popup = L.popup();
var times_square_popup = L.popup();

function onEsMarkerHover(e) {
	empire_state_popup
		.setLatLng(e.latlng)
		.setContent(newYorkCords[0].siteName)
		.openOn(new_york_map);
}

function onSlMarkerHover(e) {
	statue_of_liberty_popup
		.setLatLng(e.latlng)
		.setContent(newYorkCords[1].siteName)
		.openOn(new_york_map);
}
function onCpMarkerHover(e) {
	central_park_popup
		.setLatLng(e.latlng)
		.setContent(newYorkCords[2].siteName)
		.openOn(new_york_map);
}
function onTsMarkerHover(e) {
	times_square_popup
		.setLatLng(e.latlng)
		.setContent(newYorkCords[3].siteName)
		.openOn(new_york_map);
}

empire_state_marker.on('mouseover', onEsMarkerHover);
statue_of_liberty_marker.on('mouseover', onSlMarkerHover);
central_park_marker.on('mouseover', onCpMarkerHover);
times_square_marker.on('mouseover', onTsMarkerHover);


let generateNewYorkMap = () => {
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
	}).addTo(new_york_map);
}

	

