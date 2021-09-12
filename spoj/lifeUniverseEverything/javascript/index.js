#!/bin/node
let input = process.argv;

for (let i = 2; i < input.length; i++) {
	if (input[i] === '42') break;

	console.log(input[i]);
}
