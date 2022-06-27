jerusalem_map = L.map('jerusalem_map').setView(jerusalemCords[4].coordinates, 15);


var western_wall_marker = L.marker(jerusalemCords[0].coordinates).addTo(jerusalem_map);
var tower_of_david_marker = L.marker(jerusalemCords[1].coordinates).addTo(jerusalem_map);
var zion_gate_marker = L.marker(jerusalemCords[2].coordinates).addTo(jerusalem_map);
var mamilla_marker = L.marker(jerusalemCords[3].coordinates).addTo(jerusalem_map);

var western_wall_popup = L.popup();
var tower_of_david_popup = L.popup();
var zion_gate_popup = L.popup();
var mamilla_popup = L.popup();


function onWwMarkerHover(e) {
	western_wall_popup
		.setLatLng(e.latlng)
		.setContent(jerusalemCords[0].siteName)
		.openOn(jerusalem_map);
}
function onTdMarkerHover(e) {
	tower_of_david_popup
		.setLatLng(e.latlng)
		.setContent(jerusalemCords[1].siteName)
		.openOn(jerusalem_map);
}
function onZgMarkerHover(e) {
	zion_gate_popup
		.setLatLng(e.latlng)
		.setContent(jerusalemCords[2].siteName)
		.openOn(jerusalem_map);
}
function onMaMarkerHover(e) {
	mamilla_popup
		.setLatLng(e.latlng)
		.setContent(jerusalemCords[3].siteName)
		.openOn(jerusalem_map);
}

western_wall_marker.on('mouseover', onWwMarkerHover);
tower_of_david_marker.on('mouseover', onTdMarkerHover);
zion_gate_marker.on('mouseover', onZgMarkerHover);
mamilla_marker.on('mouseover', onMaMarkerHover);




let generateJerusalemMap = () => {
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	}).addTo(jerusalem_map);
}
	