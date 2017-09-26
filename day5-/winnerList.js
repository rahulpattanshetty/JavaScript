

function countWins(winnerlist,cname) {
	var count = 0;
	var winTeam=winnerlist.filter(function(winner){
		return winner.country == cname
	});
	console.log(winTeam)
	winTeam.forEach(function(n){console.log(n.team)});
	
}
winnerlist1=[{team:"Real Madrid", country:"spain"},
			{team:"Milan", country:"Italy"},
			{team:"Real Madrid", country:"spain"}]
console.log(countWins(winnerlist1,"spain"));

