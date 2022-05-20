"use strict";
// Genenrics              // allows us to write reusable code 
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc = addUID({
    name: 'ere', age: 23
});
// let doc1 = addUID('helllo')
// console.log(doc)
console.log(doc.age);
let doc2 = addUID({ name: "23" });
// example
const doc3 = {
    uid: 1,
    resourceName: 'person',
    data: { name: "sdfs" } // So here we can't pass string or number or array value instead of object   
};
//another example
const doc4 = {
    resourceName: 'babar',
    uid: 4,
    data: ['rew', 'df']
};
console.log(doc3, doc4);
