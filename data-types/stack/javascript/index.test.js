const stack = require('./index.js');

let stackTest = [];

stackTest = stack.push(stackTest, 2);
stackTest = stack.push(stackTest, 3);
stackTest = stack.push(stackTest, 5);

console.log(stackTest);

stackTest = stack.pop(stackTest);

console.log(stackTest);
