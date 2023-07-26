//Test the values below to print true if at least one pair is truthy

const param1A = 'cat';
const param1B = 'cat'
const param2A = 6;
const param2B = '6';

const param1A = 'five';
const param1B = 5;
const param2A = 'dog';
const param2B = 'dawg';

const param1A = 0;
const param1B = false;
const param2A = 'horse';
const param2B = 'horse';

const param1A = 'eight';
const param1B = 'eight';
const param2A = 'ate';
const param2B = 'ate';

const param1A = 11;
const param1B = 'eleven';
const param2A = 'four';
const param2B = 'for';

const param1A = 'cake';
const param1B = 'cake';
const param2A = 'pie';
const param2B = 'pie';


//This works for all of the values above to test
if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}