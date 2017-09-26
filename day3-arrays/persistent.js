


var output = 1;
function persistent(number) {
		number.forEach(function(n){
			output *= parseInt(n);
		})
	if (output > 9) {
		var n = String(output).split("");
		output = 1;
		persistent(n);
	}
}

number = 39
var n = String(number).split("");
persistent(n)
console.log(output);
