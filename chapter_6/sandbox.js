// // DOM
// // Add, change, delete content
// // cool interactive effects

// document.location;
// document.getElementById;
// document.getElementsByClassName;

// let para = document.querySelector('p'); // gets the first element of this name
// console.log(para);

// para = document.querySelector('.error');
// console.log(para);

// para = document.querySelector('div.error');
// console.log(para);

// para = document.querySelector('body > h1');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(paras);

// paras.forEach(para => {
//    console.log(para); 
// });

// console.log(paras[0]);
// console.log(paras[1]);


// // ID GRABBING ON THE DOM
// // get an element by id
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// can't use for each on html collection
// errors.foreach(error => {
//     console.log(error);
// });

// get elements by their tag name

// let paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText += ' ninjas are awesome!';

// paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' -- new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// // += to append, = to overwrite
// content.innerHTML = '<H2>THIS IS A NEW H2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href')); // value of link
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNet Ninja Website';

// const msg = document.querySelector('p.error');
// console.log(msg);
// msg.setAttribute('class', 'success');

// msg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;');
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = ''; // empty

// const perror = document.querySelector('p.error');
// console.log(perror.innerHTML);
// console.log(perror.style);

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// console.log(content.classList);
// content.classList.remove('error');
// console.log(content.classList);

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.textContent);
    if(para.textContent.includes('error')) {
        para.classList.add('error');
    }

    if (para.textContent.includes('success')) {
        para.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');