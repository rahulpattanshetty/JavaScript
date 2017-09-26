function add(n1,n2) {
	return n1 + n2;
}

console.log(add(10,20));
//whenever we pass , additional args it will reject the extra args
console.log(add(10,20,30));
//whenever we pass less args the remaining args will be treated as undefined by javascript