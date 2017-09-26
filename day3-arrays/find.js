var numbers = [10,20,15,30,45,50]

//find
/*
numbers.find{|n| n>15}
*/
var result = numbers.find(function(n){
	return n > 15;
});
console.log(result);

var result = numbers.find(function(n){
	return n >55;
});//returns undefined
console.log(result);

//filter
/*
numbers.find_all{|n| n>=20}
*/
var result = numbers.filter(function(n){
	return n >= 20;
});
console.log(result);

var result = numbers.filter(function(n){
	return n >= 55;
});

console.log(result);
