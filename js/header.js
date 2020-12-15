let subMobile = document.querySelector('.sub_mobile');
let liDropDown = document.querySelector('.drop_down');
let liDropDownMobile = document.querySelector('.sub_mobile .drop_down');
let subLi = document.querySelector('.drop_down ul');
let subLiMobile = document.querySelector('.sub_mobile .drop_down ul');

document.querySelector('.burger img').addEventListener('click', () => {
    if (subMobile.style.display === "none" || subMobile.style.display === "") {
        subMobile.style.display = "block";
    } else {
        subMobile.style.display = "none";
    };
});


liDropDown.addEventListener('mouseenter', () => {
    subLi.style.display = "block";
    liDropDown.addEventListener('mouseleave', () => {
        subLi.style.display = "none";
    });
});


liDropDownMobile.addEventListener('click', () => {
    if (subLiMobile.style.display === "none" || subLiMobile.style.display === "") {
        subLiMobile.style.display = "block";
    } else {
        subLiMobile.style.display = "none";
    };
});
