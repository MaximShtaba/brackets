module.exports = function check(str, bracketsConfig){
	let stack = [];
	let brackets = {
		")": "(",
		"}": "{",
		"]": "[",
	}
	for (let i = 0; i < str.length; i++) {
		let curent = str[i];
		if (isClosedBracket(curent)) {
			if (brackets[curent] !== stack.pop()) return false;
		} else {
			stack.push(curent);
		}
	}
	return stack.length === 0;
}


function isClosedBracket(ch) {
	return ["}", ")", "]",].includes(ch) > -1
}
