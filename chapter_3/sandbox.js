// L O O P S
// for loops

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


// IF STATEMENTS
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

// AND
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

// // // using if statements
// // if(grade ==='A'){
// // } else if(grade === 'B'){

// // }else if(grade === 'C'){
   
// // }else if(grade === 'D'){
   
// // }else if(grade === 'F'){
   
// // }

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