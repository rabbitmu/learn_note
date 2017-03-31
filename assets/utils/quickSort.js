const arr = [5, 4, 19, 22, 3, 8, 1];

function quickSort(arr) {
	if(arr.length <= 1) return arr;
	const len = Math.floor(arr.length / 2);
	const temp = arr.splice(len, 1)[0];
	let left = [],
		right = [];

	arr.map(item => {
		if(item < temp) {
			left.push(item);
		} else {
			right.push(item);
		}
	});

	return quickSort(left).concat([temp]).concat(quickSort(right));
}

console.log(quickSort(arr));
