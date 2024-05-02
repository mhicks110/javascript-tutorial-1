// alert('hello, world');

// runs top to bottom
// console.log(1);
// console.log(2);

// // log things to console
// let age = 25;
// let year = 2019;
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// // points = 50; // constants not overwritten
// console.log(points);

// var score = 75;
// console.log(score);

// Strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);


// getting characters
console.log(fullName[2]);


// string length
console.log(fullName.length);

// string methods 
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
email = 'mario@thenetninja.co.uk';
result = email.lastIndexOf('n');
console.log(result);

result = email.slice(0, 5);
console.log(result);

result = email.substring(4, 14);
console.log(result);

result = email.replace('m', 'w');
console.log(result);

// the first character
result = email.replace('n', 'w');
console.log(result);


// NUMBERS
let radius = 10;
const pi = 3.14;

console.log(radius, pi); // numbers same datatype in JS

// math operators +, -, *, /, **, %
// ** power of
 console.log(10 / 2);

 result = radius % 3; // remainder
 console.log(result);

 result = pi * radius**2;
 console.log(result);

 // Order of operations - B I D M A S
 result = 5 * (10 - 3)**2;
 console.log(result);

 let likes = 10;
 
 likes++;
 console.log(likes);

 likes--;
 console.log(likes);

 likes += 10;
 console.log(likes);
 
 likes *= 2;

 likes -= 2;

 likes /= 2;

 // NaN - not a number
 console.log(5 / 'hello');

 result = 'the blog has ' + likes + ' likes';
 console.log(result);

 
 // TEMPLATE STRINGS
 const title = 'Best reads of 2019';
 const author = 'Mario';
 likes = 30;

 // Concatenation way
result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(result);

 // template string way (template literal)
result = `The blog called ${title} by ${author} has ${likes} likess`;
console.log(result);

 // creating html templates
 let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes.</span>
 `;
 console.log(result);


 // O B J E C T S
 // Collections
 let ninjas = ['shaun', 'ryu', 'chun-li'];
 console.log(ninjas);

 console.log(ninjas[1]);

 ninjas[1] = 'ken';
 console.log(ninjas);

 let ages = [20,25,30,35];
 console.log(ages[2]);

 let random = ['shawn', 'crystal', 30, 20]; // should store data that belongs together
 console.log(random);

 
console.log(ninjas.length);

// array methods
result = ninjas.join(', ');
console.log(result);

result = ninjas.indexOf('chun-li');
console.log(result);

result = ninjas.concat(['ken', 'crystal']);
console.log(result);

result = ninjas.push('ken');
result = ninjas.pop(); // displays the result that it popped
console.log(result);


// Null Variable
// let age; // undefined
// let age = null; // null

// B O O L E A N S 
// booleans & comparisons
console.log(true, false, "true", "false");

// methods can return booleans
email = 'luigi@thenetninja.co.uk';

result = email.includes('@');
console.log(result);

// comparison operators
names = ['mario', 'luigi', 'toad'];
age = 25;

console.log(age == 25);
console.log(age != 30);
console.log(age < 30);
console.log(age > 30);
console.log(age >= 30);
console.log(age <= 30);

// loose comparison
console.log(age != 25);
console.log(age != '25'); // don't use strings equivalents for these equalities

// strict equality
console.log(age === 25); // value and type
console.log(age === '25');
console.log(age !== 25); // value and type
console.log(age !== '25');

// C O N V E R S I O N
// type conversions
score = '100';
console.log(score + 1);

console.log(Number(score) + 1);
console.log(typeof score);

result = Number('hello');
console.log(result);

result = String(50);
console.log(result, typeof result);

result = Boolean(50);
console.log(result, typeof result);

result = Boolean(0); // nothing is false
console.log(result, typeof result);

result = Boolean(-1);
console.log(result, typeof result);

result = Boolean(''); // nothing is false
console.log(result, typeof result);

result = Boolean('value');
console.log(result, typeof result);