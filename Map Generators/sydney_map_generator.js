var sydney_map = L.map('sydney_map').setView(sydneyCords[4].coordinates, 12);

var bondi_beach_marker = L.marker(sydneyCords[0].coordinates).addTo(sydney_map);
var taronga_zoo_marker = L.marker(sydneyCords[1].coordinates).addTo(sydney_map);
var opera_house_marker = L.marker(sydneyCords[2].coordinates).addTo(sydney_map);
var airport_marker = L.marker(sydneyCords[3].coordinates).addTo(sydney_map);

var bondi_beach_popup = L.popup();
var taronga_zoo_popup = L.popup();
var opera_house_popup = L.popup();
var airport_popup = L.popup();


function onBbMarkerHover(e) {
	bondi_beach_popup
		.setLatLng(e.latlng)
		.setContent(sydneyCords[0].siteName)
		.openOn(sydney_map);
}

function onTzMarkerHover(e) {
	taronga_zoo_popup
		.setLatLng(e.latlng)
		.setContent(sydneyCords[1].siteName)
		.openOn(sydney_map);
}

function onOhMarkerHover(e) {
	opera_house_popup
		.setLatLng(e.latlng)
		.setContent(sydneyCords[2].siteName)
		.openOn(sydney_map);
}

function onApMarkerHover(e) {
	airport_popup
		.setLatLng(e.latlng)
		.setContent(sydneyCords[3].siteName)
		.openOn(sydney_map);
}

bondi_beach_marker.on('mouseover', onBbMarkerHover);
taronga_zoo_marker.on('mouseover', onTzMarkerHover);
opera_house_marker.on('mouseover', onOhMarkerHover);
airport_marker.on('mouseover', onApMarkerHover);


let generateSydneyMap = () => {
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
	}).addTo(sydney_map);
}

