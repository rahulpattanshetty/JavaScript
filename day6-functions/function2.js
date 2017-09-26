function add() {
	//variable defined inside a function without the keyword var will make it aglobal variable, it is made available outside the function
	n1 = 10;
	n2 =20;
	console.log(n1,n2);
	
}
add();
console.log(n1);//not defined output bcoz n1 is treated out as global variable
console.log(n2);//not defined output