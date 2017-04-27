/**
 * 深度克隆
 */
const obj = {
	a: {
		b: {
			c: 1
		}
	},
	d: {
		e: 2
	}
};

const arr = [
	{ a: 1 },
	{ b: { c: 2 } }
];

function cloneDeep(obj, result) {
	result = result || (obj instanceof Array ? [] : {});
	if(obj instanceof Object) {
		Object.entries(obj).map(([ key, value ]) => {
			if(value instanceof Object) {
				result[key] = value instanceof Array ? [] : {};
				cloneDeep(value, result[key]);
			} else {
				result[key] = value;
			}
		});
	} else {
		result = obj;
	}

	return result;
}

function cloneDeepByStringify(obj) {
	let result = JSON.stringify(obj);
	return JSON.parse(result);
}

console.log(cloneDeepByStringify(arr));
