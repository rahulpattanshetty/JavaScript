
function getWinner(cands)
{
	
	var cand_hash = {};
	cands.forEach(function(cand){
		if (!(cand in cand_hash))
		 {
		 	cand_hash[cand] = cands.filter(function(c){
		 		return c == cand
		 	}).length;
		 }
	})
	var count = 0;
	var vote = 0;
	for( key in cand_hash)
	{
		count += cand_hash[key];
	}
	vote = count/2;
	var result = "";
	for( key in cand_hash)
	{
		if (cand_hash[key] > vote) 
		{
			result = key;
		}
	}
	if (result != "")
		{return result}
	else{
	return false
	}
}

console.log(getWinner(["A", "B", "C", "D"]));
console.log(getWinner(["A", "A", "A", "B", "B"]));
console.log(getWinner(["A", "A", "A", "B", "B", "C"]));
