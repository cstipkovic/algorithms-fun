const Stack = {
	push: (stack, item) => {
		stack[stack.length] = item

		return stack;
	},

	pop: (stack) => {
		

		return stack;
	},

	list: (stack) => {
		for (let i of stack) {
			console.log(i);
		}
	}
}

module.exports = Stack;
