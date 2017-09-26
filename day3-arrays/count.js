var numbers = [10,20,30,20,10,10];


//var result = numbers.filter(function(n){ 
//	return n == 10});
//console.log(result.length)


Array.prototype.count = function(n) {
	var count = 0;
	this.forEach(function(num)
	{
		if (num == n) 
		{
			count++;
		}
	});
	return count;
};

var names = ["virat","virat","sachin"];
console.log(numbers.count(10));
console.log(names.count("virat"));