// let map = L.map('map').setView([48.871900, 2.776623], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// let searchControl = L.esri.Geocoding.geosearch().addTo(map);

// let results = L.layerGroup().addTo(map);

// searchControl.on('results', function (data) {
// 	results.clearLayers();
// 	for (let i = data.results.length - 1; i >= 0; i--) {
// 		results.addLayer(L.marker(data.results[i].latlng));
// 	}
// });

window.onload = function(){
	let carte = L.map("carte").setView([48.852969, 2.349903],13)
	L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',).addTo(carte)

	L.routing.control({
		geocoder: L.Control.Geocoder.nominatim(),
		lineOptions: {
			styles: [{
				color: '#C9116A',
				opacity: 1,
			}]
		},
		router: new L.Routing.osrmv1({
			language: 'fr',
			profil: 'velo'
		})
	}).addTo(carte)
}
