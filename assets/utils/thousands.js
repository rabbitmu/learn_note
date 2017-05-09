const num = 1234567789.123;

function thousands(num) {
	num += '';

	// 获取小数点后面的部分
	let floatNum = num.match(/\.\d+/);
	floatNum = floatNum ? floatNum[0] : '';

	let intNum = num.match(/(\d+)\./)[1];

	// 翻转字符并添加逗号
	let arr = intNum.split('').reverse();
	for(let i = 0; i < arr.length; i++) {
		if(i % 3 === 0 && i) {
			arr[i] += ',';
		}
	}

	return arr.reverse().join('') + floatNum;
}

console.log(thousands(num));
