function add() {
	return 10 +20;
}

var details = function(){
	return "hi ";
}

console.log(add());//here add is fn we invoke it using ()
console.log(details);//here returns the value of the variable which is a fn
console.log(details());//as the value of variable is a fn we can invoke the fn using ()


//iffe- immediately invoked function expression
(function(){
	console.log("I called myself");
})();