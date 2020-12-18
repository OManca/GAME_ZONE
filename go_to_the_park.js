navigator.geolocation.getCurrentPosition(showPosition);

let longitude = 0;
let latitude = 0;

function showPosition(position) {
	latitude = position.coords.latitude;
	longitude =position.coords.longitude;

	let carte = L.map("carte").setView([48.852969, 2.349903],13)
	L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',).addTo(carte)
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
			language: 'fr'
		})
	}).addTo(carte)
}

