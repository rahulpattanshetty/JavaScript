var numbers = [];
var names = new Array();

var names = ["suresh","ramesh","veeresh"];
console.log(names[0]);
console.log(names[2]);
console.log(names);

//property of an array
console.log(names.length);

//methods
console.log(typeof names); //object
console.log(Array.isArray(names)); //true

console.log(names);
console.log(names.reverse());
console.log(names)

console.log(names.sort());
console.log(names);

//mutable methods
names.push("satish");
names.unshift("ganesh");

console.log(names);

names.pop();
names.shift();
console.log(names);

var nums = new Array(5);
console.log(nums);
nums.fill(10);
console.log(nums);

console.log(nums.length == 0);//false
console.log(numbers.length == 0);//true

console.log(names.indexOf("suresh"));//1
console.log(names.lastIndexOf("suresh"));//1



var numbers = [10,20,30,10,20,40]
//iterating over an array in js
numbers.forEach(function(n){
	console.log(n+10);
});



function unique(numbers){
	var result = []	
	numbers.forEach(function(n){
		if (result.indexOf(n) < 0)  {
			result.push(n);
		}

	});
	return result
}
console.log(unique(numbers))


names.forEach(function(name){
	console.log(name.toUpperCase());
});