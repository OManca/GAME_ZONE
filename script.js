<<<<<<< HEAD
let inputs = document.querySelectorAll('.input');
let images = document.querySelectorAll('.check');

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', event => {
        if(images[i].style.display == 'block'){
            images[i].style.display = 'none' ;
        }else{
            images[i].style.display = 'block' ;
        }
    })
}

=======
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
>>>>>>> feature/rate_calculator:calculator people and total
