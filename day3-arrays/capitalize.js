

String.prototype.toCapitalize = function() {
	return  this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

var name = "rahul";
console.log(name.toCapitalize());

//empty()

Array.prototype.empty = function() {
	return (this.length == 0) ;
};
var numbers =[];
console.log(numbers.empty());

//uniq()
Array.prototype.uniq = function() {
	var result=[];
	this.forEach(function(n){
		if (result.indexOf(n) < 0) {
			result.push(n);
		}
	})
	return result;
};
var numbers = [10,20,30,10,20];
console.log(numbers.uniq());

//last()

Array.prototype.last = function() {
	//var len = this.length;
	return this[(this.length)-1];
};
console.log(numbers.last());

