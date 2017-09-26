var s = "hellocoders"
var letter = s.split("");

var result = [];
var output = [];
letter.forEach(function(let) {
		if(result.indexOf(let) < 0)
		{
			result.push(let);
		}else
		{
			output.push(let);
		}
});
console.log(output[0]);