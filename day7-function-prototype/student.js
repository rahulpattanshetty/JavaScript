function Student(){
	this.name;
	this.age;
	this.gender;
	this.medals = [];
}

var s1 = new Student();
console.log(s1);
console.log(s1.name);
s1.name = "Ravi"

s1.age = 10;
s1.gender = "m";
s1.medals = ["1st runnig race","Footall"];
s1.capitan = false; //additional property not defined function
console.log(s1);


var s2 = new Student();
s2.name = "shri"