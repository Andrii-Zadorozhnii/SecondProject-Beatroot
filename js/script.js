// header


let lightRoundOne = document.querySelector('.menu_one');
let lightRoundTwo = document.querySelector('.menu_two');
let lightRoundThree = document.querySelector('.menu_three');
let lightRoundFour = document.querySelector('.menu_four');

let menuItemOne = document.querySelector('.menu_one-link');
let menuItemTwo = document.querySelector('.menu_two-link');
let menuItemThree = document.querySelector('.menu_three-link');
let menuItemFour = document.querySelector('.menu_four-link');

menuItemOne.onmouseenter = function(){
    lightRoundOne.style.backgroundColor = "white";
}
menuItemOne.onmouseleave = function(){
    lightRoundOne.style.backgroundColor = "inherit";
}
menuItemTwo.onmouseenter = function(){
    lightRoundTwo.style.backgroundColor = "white";
}
menuItemTwo.onmouseleave = function(){
    lightRoundTwo.style.backgroundColor = "inherit";
}
menuItemThree.onmouseenter = function(){
    lightRoundThree.style.backgroundColor = "white";
}
menuItemThree.onmouseleave = function(){
    lightRoundThree.style.backgroundColor = "inherit";
}
menuItemFour.onmouseenter = function(){
    lightRoundFour.style.backgroundColor = "white";
}
menuItemFour.onmouseleave = function(){
    lightRoundFour.style.backgroundColor = "inherit";
}