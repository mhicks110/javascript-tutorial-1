// // L O O P S
// // for loops

// for(let i = 0; i < 5; i++) {
//    //code
//    console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++) {
//    console.log('in loop:', i, names[i]);
// }
// console.log('loop finished');

// for(let i = 0; i < names.length; i++) {
//    let html = `<div>${names[i]}</div>`;
//    console.log(html);
// }
// console.log('loop finished');

// // while loops
// let i = 0;
// while(i < names.length) {
//    console.log('in loop: ', i, names[i]);
//    i++;
// }
// console.log('Loop complete');

// DO WHILE LOOPS

// let i = 5;
// do{
//    console.log('val of i is: ', i);
//    i++;
// } while(i < 5); 
// console.log('Loop complete');


// // IF STATEMENTS
// const age = 25;
// if(age > 20){
//    //
//    console.log('you are over 20');
// }

// const ninjas = ['shawn', 'f', 'd', 'ff', 'far'];

// if(ninjas.length > 4){
//    console.log('lots of ninjas');
// }


// // else if statements
// const password = 'p@ss123456789';

// if(password.length >= 12){
//    console.log('that password is strong');
// } else if(password.length >= 8){
//    console.log('that password is long enough');
// } else {
//    console.log('password is not long enough');
// }

// logical operators - or || and AND &&

// const password = 'p@ss1234414141414144';

// // AND
// if(password.length >= 12 && password.includes('@')){
//    console.log('that password is strong');
// } else if(password.length >= 8){
//    console.log('that password is long enough');
// } else {
//    console.log('password is not correct');
// }

// // AND and OR
// const password = 'p@ss1234414141414144';

// if(password.length >= 12 && password.includes('@')){
//    console.log('that password is really strong');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//    console.log('that password is strong enough');
// } else {
//    console.log('password is not correct');
// }


// // logical NOT (!)
// let user = false;

// if(!user){
//    // code
//    console.log("Must be logged in to continue.");
// }

// console.log('!true =' + !true);
// console.log('!false =' + !false);


// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i=0; i < scores.length; i++){
//    if(scores[i] === 0){
//       continue; // ignore the rest of the code in the block etc.
//    }

//    console.log('your score: ', scores[i])
   
//    if(scores[i] === 100){
//       console.log('congrats, you got the top score');
//       break;
//    }
// }


// // S W I T C H
// // switch statements
// const grade = 'E';

// // using if statements
// if(grade ==='A'){
// } else if(grade === 'B'){

// }else if(grade === 'C'){
   
// }else if(grade === 'D'){
   
// }else if(grade === 'F'){
   
// }

// switch(grade){
//    case 'A':
//       //code
//       console.log(`You got a ${grade}!`);
//       break;
//    case 'B':
//       //code
//       console.log(`You got a ${grade}!`);
//       break;
//    case 'C':
//       //code
//       console.log(`You got a ${grade}!`);
//       break;
//    case 'D':
//       //code
//       console.log(`You got a ${grade}!`);
//       break;
//    case 'E':
//       //code
//       console.log(`${grade}, is not a valid grade.`);
//       break;
// }


// // Global scope
// // use let and const more often then just var for proper defined vars
// let age = 30;
// console.log('before code block: ', age);

// if(true){
//    let age = 40;
//    let name = 'shawn';
//    console.log('inside first code block: ', age, name);

//    if(true){
//       let age = 50;
//       console.log('inside second code block: ', age);
//    }
// }

// console.log('outside code block: ', age);

// // function expression
// const speak = function(){
//    console.log('good day!');
// };

// greet();
// // greet();
// // greet();

// speak();

// // function declaration
// // defined below call and works because of hoisting
// // works with declarations but not expressions
// function greet(){
//    console.log('hello there');
// }



// // ARGUMENTS AND PARAMETERS
// const speak = function(name = 'luigi', time = 'night'){
//    console.log(`Good ${time} ${name}.`);
// };

// speak('mario', 'morning');
// speak();


// // RETURNING VALUES
// const calcArea = function(radius){
//    return 3.14 * radius**2;
//    // console.log(area);
//    // return area;
// }

// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area){

// };

// calcVol(area);


// // REGULAR FUNCTION
// const calcArea = function(radius){
//    return 3.14 * radius**2;
// }

// // ARROW FUNCTION => (lambda expression)
// const calcArea = (radius) => {
//    return 3.14 * radius**2;
// }

// const calcArea = radius => 3.14 * radius**2


// const area = calcArea(5);
// console.log(`The area is: ${area}`);

// const greet = function(){
//    return 'hello, world';
// }

// const greet = () => 'hello, world'
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//       total += products[i] + products[i] * tax;
//    }
//    return total;
// }

// const bill = (products, tax) => {
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//       total += products[i] + products[i] * tax;
//    }
//    return total;
// }

// console.log(bill([10,15,30], 0.2));

// const name = 'shaun';

// // FUNCTIONS
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // METHODS 
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);


// CALLBACKS & FOREACH

// const myFunc = (callbackFunc) => {
//    // do something
//    let value = 50;
//    callbackFunc(value);
// };
// myFunc(function(value){
//    // do something
//    console.log(value);
// });
// // ARROW VERSION
// myFunc(value => {
//    // do something
//    console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// // anonymouse callback function
// people.forEach(function(person){
//    console.log(person);
// });

// const logPerson = (person, index) => {
//    console.log(`${index} - Hello ${person}`);
// };

// people.forEach(logPerson);

// GET A REFERENCE TO THE 'ul'
const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
   html += `<li style="color: purple">${person}</li>`;
});

console.log(people);

ul.innerHTML = html;