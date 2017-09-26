input = "hello world"

output = "#"

var len= input.length;
var arr = input.split(" ");
 console.log(arr);

 arr.forEach(function(word){
 	output += word.charAt(0).toUpperCase() + word.slice(1);

 })
console.log(output)