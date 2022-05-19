type StringOrNum = string | number;     // this is called type alises
type objWithName = { name: string, uid: StringOrNum }


const logDetails = (uid: StringOrNum, item: string) => {     // here we use uid which have type of string or number
     console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: objWithName) => {  // here we use uid which have type of string or number soo these are repeated with function logDetails
     console.log(`${user.name} says hello`)                        //So therefor we are using Type Aliases
}

const greetAgain = (user: objWithName) => {
     console.log(`${user.name} says hello`)

}