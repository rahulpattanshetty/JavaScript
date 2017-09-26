var n1=10;
var n2=20;


function add(n1,n2) {
	//n1 & n2 are parameters and all parameters have become local variable
	console.log(n1);
	console.log(n2);
	n1 = 100;//this replace the original data with new data
	n2 = 200;
	return "back from function"
}
console.log(add(n1,n2));
console.log(n1);
console.log(n2);