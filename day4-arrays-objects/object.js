//name - value pair
//in  js keys also treated as properties of object

var person = {
	firstName: "rahul",
	lastName: "pattanshetti"
}

console.log(person);
console.log("The firstName is " + person.firstName);//rahul
console.log("lastName is " + person.lastName);//patt

person["middleName"] = "ramesh";//adding name/key & value to hash
person.title = "mr ";
console.log(person);

console.log(person.title +"."+person.firstName+" "+person.lastName);

var players = {
	virat: 3,
	sachin: 2,
	dhoni:1
}
//players.each do |key,value|

for(var key in players)
{
	console.log(key + " appears " + players[key] + " times.")
}


