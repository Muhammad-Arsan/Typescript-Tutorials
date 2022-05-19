"use strict";
// const anchor = document.querySelector('a');
// console.log(anchor.href)                   //  it showing error because it may be null
const anchor = document.querySelector('a');
if (anchor) { // So, it checks for (a) is not null or (a) is exist than log its property 
    console.log(anchor.href);
}
const anc = document.querySelector('a'); // thats mean (a) is not null 
console.log(anc.href);
const form = document.querySelector('.new-item-form'); // thats mean form exist and its type is HTMLFormElement
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
