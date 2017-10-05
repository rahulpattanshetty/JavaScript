var positionHandle = document.getElementById('position')
positionHandle.innerHTML = atom.position();
var moveHandle = document.getElementById('move')
var moves = [];
document.onkeydown = function (e) {			
	if (e.keyCode == 37) {
		positionHandle.innerHTML = atom.left();
		moves.push("L");
	}else if (e.keyCode == 39) {
		positionHandle.innerHTML = atom.right();
		moves.push("R");
	}else if (e.keyCode == 38) {
		positionHandle.innerHTML = atom.move();
		moves.push("M");
	}
	moveHandle.innerHTML = moves.join("<br/>");

}





