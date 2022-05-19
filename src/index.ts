
let greet: Function

greet = () => {
     console.log("Greetings")
}
// greet = 'dsdsfd'    cant assign type string to type function
greet()

const add = (a: number, b: number, c?: number | string) => {     /*if we set default value for number or string than we cnt use optional parameter with C 
                                                                 like  add(a:number, b:number, c: number |  string="10") in this case we cant use c?*/
     console.log(a + b);                              // if you want optional parameters or defualt paramters than always set them in the end of paramters 
     console.log(c)                  // yaha kux return nii kr rhe tu uss ki type void ho gi
}
add(3, 4);
// add(3,"sd")


const minus = (a: number, b: number) => {   // the type of function return is number
     return a - b;
}

let result = minus(4, 5)

//result = 'dfwfe'   // cant do this because type of result is the type of return which is number.