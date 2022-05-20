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
