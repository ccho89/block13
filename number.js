const num1 = 50;   //Value 1
const num2 = 51;
const sum = num1 + num2;

const num1 = 99;   //Value 2
const num2 = -2;
const sum = num1 + num2;

const num1 = 0;    //Value 3
const num2 = 101;
const sum = num1 + num2;

const num1 = 500;  //Value 4
const num2 = -500;
const sum = num1 + num2;

const num1 = -1000; //Value 5
const num2 = 0;
const sum = num1 + num2;

const num1 = -5;    //Value 6
const num2 = 0;
const sum = num1 + num2;

if (sum > 100) {
    console.log('${sum} is greater than 100');  //Applies to values 1 and 3
} else if (sum > 0) {
    console.log('${sum} is greater than 0');   //Applies to value 2
} else if (sum === 0) {
    console.log('${sum} is equal to 0');  //Applies to value 4
} else if (sum < 0) {
    console.log('{sum} is a negative number');  //Applies to values 5 and 6
}