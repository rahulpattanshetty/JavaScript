var str ="virat virat sachin dhoni virat";

var arr = str.split(" ");
console.log(arr);

var output = {}
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
Array.prototype.uniq = function() {
	var result=[];
	this.forEach(function(n){
		if (result.indexOf(n) < 0) {
			result.push(n);
		}
	})
	return result;
};

var arrUniq = arr.uniq();


arrUniq.forEach(function(n) {
	var count = arr.count(n)
	 output[n] = "*".repeat(count);	
})
console.log(output);
