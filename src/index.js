module.exports = function check(str, bracketsConfig) {
	if (str.length%2!==0) return false
	let arr = [];
	for (let i = 0; i < str.length; i++) {
	 for (let j = 0; j<bracketsConfig.length; j++){
		
		if (str[i] === bracketsConfig[j][0]) { arr.push(str[i])}
		
		else if (arr[arr.length-1] !== bracketsConfig[j][1] ) {arr.pop()}
		
	 }
	

	}
 if (arr.length === 0) {return true} else {return false }
}
