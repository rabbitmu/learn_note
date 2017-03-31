function curry() {
	let args = [];

	return function add() {
		if(!arguments.length) {
			return args.reduce((prev, item) => prev + item);
		}
		Array.prototype.push.apply(args, arguments);
		return add;
	};
}

const add = curry();
const result = add(1, 2)(3)();
console.log(result);
