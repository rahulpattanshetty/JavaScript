function Product(details) {
	this.name = details.name;
	this.price = details.price;
	this.categoryId = details.categoryId;
}

var p1 = new Product({name: "marker", price: 10, categoryId: 1});
console.log(p1);