let map = L.map('map').setView([40.91, -96.63], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let searchControl = L.esri.Geocoding.geosearch().addTo(map);

let results = L.layerGroup().addTo(map);

searchControl.on('results', function (data) {
	results.clearLayers();
	for (let i = data.results.length - 1; i >= 0; i--) {
		results.addLayer(L.marker(data.results[i].latlng));
	}
});