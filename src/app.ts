

// ENUMS                                                     // where we set  variables to be predefined constant


enum ResourceType { BOOK, PHONE, LAPTOP, PERSON, BALL }

interface Resource<T> {
     uid: number;
     resourceType: ResourceType,
     data: T
}

const docOne: Resource<object> = {
     uid: 22,
     resourceType: ResourceType.PHONE,
     data: { name: 'bilal' }
}

const docTwo: Resource<string[]> = {
     uid: 33,
     resourceType: ResourceType.PERSON,
     data: ['ahmed', 'ali', 'arsan']
}

console.log(docOne, docTwo)