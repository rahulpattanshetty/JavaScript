function Person(){
	this.firstName;
	this.lastName;
	this.greeting = function(){
		return "Hello" +this.firstName+ " "+this.lastName;
	}
	
}

var p1 = new Person();
p1.firstName="Rahul";
p1.lastName="pattanshetty";
console.log(p1);
console.log("Hello "+p1.firstName+" "+p1.lastName);
console.log(p1.greeting());
