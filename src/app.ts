// const anchor = document.querySelector('a');
// console.log(anchor.href)                   //  it showing error because it may be null

const anchor = document.querySelector('a')

if (anchor) {                       // So, it checks for (a) is not null or (a) is exist than log its property 
     console.log(anchor.href)
}

const anc = document.querySelector('a')!;    // thats mean (a) is not null 
console.log(anc.href)


const form = document.querySelector('.new-item-form') as HTMLFormElement   // thats mean form exist and its type is HTMLFormElement
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
     e.preventDefault();

     console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})

