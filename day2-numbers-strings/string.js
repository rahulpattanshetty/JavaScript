var firstName = 'rahul';
var password = "see123"
var lastName = "pattanshetty";
var sentence = "this is bangalore";
var paragraph = "today is tuesday, today is govt holiday";

console.log(password.length);//6

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(sentence.indexOf('bangalore'));//8
console.log(sentence.indexOf('chennai'));//-1

console.log(paragraph.indexOf('today')); //0
console.log(paragraph.lastIndexOf('today'));//18
console.log(paragraph.lastIndexOf('yesterday')); //-1

console.log(password.charAt(2));//e

console.log(sentence.search('bangalore')); //8
console.log(password.includes("see123")); //true

//"*" * 3
console.log("*".repeat(3));
console.log(firstName.repeat(2));

//Extracting from string
var name = "ramachandran";

console.log(name.slice(0,4)); //rama
console.log(name.slice(4)); //chandran

console.log(name.substring(0,4)); //rama
console.log(name.substring(4)); //chandran

console.log(name.substr(2,2)); //ma
console.log(name.substr(2,1)); //m
console.log(name.substr(2,3)); //mac

//capitalize
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize(name));


var numbers = "1234567890"

var n1 = numbers.substr(0,3);//123
var n2 = numbers.substr(3,3);//456
var n3 =numbers.substr(6);//7890
console.log("(" +n1+") "+n2+"-"+n3);

//only ES6 feature is ecmascript 2015
// string interpolation
console.log(`(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`);


if (paragraph.includes('today')) {//paragraph.search("today") >= 0 
	console.log("today is present");
}else{
	console.log("today is not present");
}

if (paragraph.indexOf('today') == paragraph.lastIndexOf('today')) {
	console.log("today is not repeated");

}else{
	console.log("today is repeated");
}