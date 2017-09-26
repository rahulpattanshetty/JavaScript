//global variable
var n1=10;
var n2=20;

//variable defined inside the fun is available directly inside the fun in js
function add() {
	
	console.log(n1);
	console.log(n2);
	//changes can be made to the variables.changes made inside the function will affect the variable
	
	 n1 = 100;
	n2 = 200;
	return "back from function"
}
console.log(add());
//changes made inside the fun will affect the variable
console.log(n1);
console.log(n2);