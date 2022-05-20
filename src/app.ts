

// Genenrics              // allows us to write reusable code 


const addUID = <T extends { name: string }>(obj: T) => {
     let uid = Math.floor(Math.random() * 100)
     return { ...obj, uid }
}

let doc = addUID({
     name: 'ere', age: 23
})
// let doc1 = addUID('helllo')
// console.log(doc)
console.log(doc.age)
let doc2 = addUID({ name: "23" })


// with interfaces

interface Resource<T> {
     uid: number;
     resourceName: string;
     data: T
}

// example
const doc3: Resource<object> = {                // resource (T) has an type of object
     uid: 1,
     resourceName: 'person',
     data: { name: "sdfs" }                    // So here we can't pass string or number or array value instead of object   
}

//another example

const doc4: Resource<string[]> = {
     resourceName: 'babar',
     uid: 4,
     data: ['rew', 'df']
}


console.log(doc3, doc4)