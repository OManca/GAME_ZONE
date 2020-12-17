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

