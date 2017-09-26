names = ["Seldon","leonard","Penny","Rajesh","howard"]

r = 6

while (r < 0){
	names.forEach(function(name){
		names.shift();
		names.push(name,name);
	});
	--r;
}
console.log(names[0]);