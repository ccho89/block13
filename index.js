const string = "I am a string";
if (string) {
    console.log(true); //For input value "I am a string"
} else {
    console.log("The boolean value false is falsy") //For input value false
} 
const string = null; //For input value null
if (!string) {
    console.log("The null value is falsy")
}
const string = undefined; //For input value undefined
if (!string) {
    console.log("undefined is falsy")
}
const string = 0;  //For input value 0
if (!string) {
    console.log("The number 0 is falsy (the only falsy number)")
}
const string = "";  //For input value ""
if (!string) {
    console.log("The empty string is falsy (the only falsy string)")
}