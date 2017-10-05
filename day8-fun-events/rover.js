const ORIENTATION = {
	"N":{
		"R": "E",
		"L": "W"
		},
	"E":{
		"R": "S",
		"L": "N"
		},
	"W":{
		"R": "N",
		"L": "S"
		},
	"S":{
		"R": "W",
		"L": "E"
		}
};

function Rover(details) {
	
	this.name = details.name;
	this.x = details.x;
	this.y = details.y;
	this.facing= details.face;
	
	this.position = function(){
		return `(${this.x},${this.y}) ${this.facing.toUpperCase()}`
	};

	this.left = function(){
		this.facing = ORIENTATION[this.facing]["L"];
		return this.position();
	};

	this.right = function(){
		this.facing = ORIENTATION[this.facing]["R"];
		return this.position();
	};

	this.move = function(){
		if (this.facing == "N"){
			this.y += 1;
		}else if (this.facing == "E") {
			this.x += 1;
		}else if (this.facing == "S") {
			this.y -= 1;
		}else if (this.facing == "W") {
			this.x -= 1;
		}
		return this.position();
	};

}
var atom = new Rover({
	name: "atom",
	x: 1,
	y: 2,
	face: "N"
});

var zesu = new Rover({
	name: "zesu",
	x: 3,
	y: 3,
	face: "E"
});

console.log(atom.position());
//LMLMLMLMM
/*
atom.left();
atom.move();
atom.left();
atom.move();
atom.left();
atom.move();
atom.left();
atom.move();
atom.move();
console.log(atom.position());

//MMRMMRMRRM
console.log(zesu.position());
zesu.move();
zesu.move();
zesu.right();
zesu.move();
zesu.move();
zesu.right();
zesu.move();
zesu.right();
zesu.right();
zesu.move();
console.log(zesu.position());
*/