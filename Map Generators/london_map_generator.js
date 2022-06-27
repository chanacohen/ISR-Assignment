var london_map = L.map('london_map').setView(londonCords[4].coordinates, 14);

var buckingham_palace_marker = L.marker(londonCords[0].coordinates).addTo(london_map);
var british_museum_marker = L.marker(londonCords[1].coordinates).addTo(london_map);
var hyde_park_marker = L.marker(londonCords[2].coordinates).addTo(london_map);
var big_ben_marker = L.marker(londonCords[3].coordinates).addTo(london_map);

var buckingham_palace_popup = L.popup();
var british_museum_popup = L.popup();
var hyde_park_popup = L.popup();
var big_ben_popup = L.popup();

function onBpMarkerHover(e) {
	buckingham_palace_popup
		.setLatLng(e.latlng)
		.setContent(londonCords[0].siteName)
		.openOn(london_map);
}

function onBmMarkerHover(e) {
	british_museum_popup
		.setLatLng(e.latlng)
		.setContent(londonCords[1].siteName)
		.openOn(london_map);
}
function onHpMarkerHover(e) {
	hyde_park_popup
		.setLatLng(e.latlng)
		.setContent(londonCords[2].siteName)
		.openOn(london_map);
}
function onBbMarkerHover(e) {
	big_ben_popup
		.setLatLng(e.latlng)
		.setContent(londonCords[3].siteName)
		.openOn(london_map);
}

buckingham_palace_marker.on('mouseover', onBpMarkerHover);
british_museum_marker.on('mouseover', onBmMarkerHover);
hyde_park_marker.on('mouseover', onHpMarkerHover);
big_ben_marker.on('mouseover', onBbMarkerHover);



let generateLondonMap = () => {
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
	}).addTo(london_map);
}
	
