let tarifone = 12.50;
let tariftwo = 13.50;
let tariftree = 15;
let devis = 0;
let numbers = [];
let sumPeople = 0;

let inputs = document.querySelectorAll('.number')
for (let i = 0; i < inputs.length ; i++) {
	numbers.push(inputs[i].value)
	sumPeople += parseInt(inputs[i].value)
};

let sumPepole = document.getElementById('sumPepole');
sumPepole.innerHTML = sumPeople;

devis = (numbers[1]*tarifone)+(numbers[2]*tariftwo)+(numbers[3]*tariftree);
let sumTotal = document.querySelector('.sumTotal');
sumTotal.innerHTML = devis