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


navigator.geolocation.getCurrentPosition(showPosition);

let longitude = 0;
let latitude = 0;

function showPosition(position) {
	latitude = position.coords.latitude;
	longitude =position.coords.longitude;

	let carte = L.map("carte").setView([48.852969, 2.349903],13)
	L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',).addTo(carte)
	console.log(latitude);
	L.routing.control({
		waypoints: [
			L.latLng(latitude, longitude ),
			L.latLng(48.871900, 2.776623)
	],
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




