"use strict";
// ENUMS                                                     // where we set  variables to be predefined constant
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["PHONE"] = 1] = "PHONE";
    ResourceType[ResourceType["LAPTOP"] = 2] = "LAPTOP";
    ResourceType[ResourceType["PERSON"] = 3] = "PERSON";
    ResourceType[ResourceType["BALL"] = 4] = "BALL";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 22,
    resourceType: ResourceType.PHONE,
    data: { name: 'bilal' }
};
const docTwo = {
    uid: 33,
    resourceType: ResourceType.PERSON,
    data: ['ahmed', 'ali', 'arsan']
};
console.log(docOne, docTwo);
// tuples 
let arr = ['df', 334, false]; // in array we can change the values  regardless thier order
arr[0] = false;
arr[1] = 'dsfs';
arr = [33, false, 'dwf'];
let tup = ['dsffs', 43, false];
// tup[0] = 343                                              //In tuple type can't do this beacuase in tuples type  we cant change type order of values
tup[0] = 'arsan'; // it allows because we can chanage vlaues but not the type we already had defined
