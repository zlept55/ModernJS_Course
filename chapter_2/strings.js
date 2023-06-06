const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// Concatenação
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + 'likes.';
// console.log(result);

//template string way
let result =  `The blog called ${title} by ${author} has ${likes} likes.`
console.log(tesult);

// creating html template
let html = `
    <h2>${title}</h2>
    <p>By ${author} </p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);
