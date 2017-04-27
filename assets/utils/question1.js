/**
 * 美团面试题
 */
const obj = {
	a: {
		b: {
			c: 1
		}
	},
	d: {
		e: 1
	}
};

function recurse() {
	let result = {};

	return function caller(obj, str = '') {
		Object.entries(obj).map(([ key, value]) => {
			let s = str.length ? `${str}.${key}` : `${key}`;
			if(value instanceof Object) {
				caller(value, s);
			} else {
				result[s] = value;
			}
		});

		return result;
	};
}

const caller = recurse();
console.log(caller(obj));
