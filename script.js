let tarifone = 12.50;
let tariftwo = 13.50;
let tariftree = 15;
let inputs = document.querySelectorAll('.number');
let sumPepoles = document.getElementById('sumPepole');
let sumTotal = document.querySelector('.sumTotal');

for (let y = 0; y < inputs.length ; y++) {
	inputs[y].addEventListener( 'input', event => {
		let sumPeople = 0;
		
		let numbers = [];
		for (let i = 0; i < inputs.length ; i++) {
			numbers.push(inputs[i].value)
			sumPeople += parseInt(inputs[i].value)
		};
		
		sumPepoles.innerHTML = sumPeople;
		let devis = 0
		devis += (numbers[1]*tarifone)+(numbers[2]*tariftwo)+(numbers[3]*tariftree);
		sumTotal.innerHTML = devis
		console.log(devis);
	});
};