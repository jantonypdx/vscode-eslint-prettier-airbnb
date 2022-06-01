// unused variable
const fs = require('fs');

// typo, console.log warning
conosole.log('top of file');

// vars vs let or const, redefining vars, unused vars, etc
var x = 5;
var x = 6;
var y = 6;
y = 7;

// lines too long
const arr = [ 'aaaaaaaa', 'bbbbbbbb', 'cccccccc', 'dddddddd', 'eeeeeeee', 'ffffffff', 'gggggggg', 'hhhhhhhh' ];

// suggested destructuring
const person = { first: 'joe', last: 'smith' };
const first = person.first;
const last = person.last;

// duplicate if checks
const z = 0;
if (z === 5) {
  console.log('check 1 - z:', z);
} else if (z === 5) {
  console.log('check 2 - z:', z);
}

// auto-conversion of concatenated string to a template literal
console.log('z = ' + z + ' not "zero"');

// loop with error (infinite loop)
for (let i = 0; i < 10; i--) {
  console.log("loop - i:", i)
}