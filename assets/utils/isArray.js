const obj = {};
const arr = [];

function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

console.log(isArray(obj));
