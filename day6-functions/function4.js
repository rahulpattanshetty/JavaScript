 function add() {
	//here is arguments is a special object which is array like that array(bcoz only index and length can access)
	console.log(arguments);
	console.log(arguments.length);
	
	//each arguments ca be accessed via the index
	console.log(arguments[0]);

	//all arguments can be access via looping over the arguments object
	var sum = 0
	for (var i = 0; i < arguments.length; i++) {
		sum +=arguments[i];
	}
	//or
	for(var key in arguments)
	{
		sum += arguments[key];
	}
	return sum;
}

console.log(add(10));
console.log(add(10,20));
console.log(add(10,20,30));