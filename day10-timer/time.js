function formatDuration(time)
{
	var hrs, mins, secs;
	hrs = Math.floor(time / 3600);
	mins = Math.floor((time - hrs * 3600)/60);
	secs = Math.floor(time -(hrs * 3600 + mins * 60));
	return `Hours : ${hrs} - Minutes : ${mins} - Seconds : ${secs}`;

}
function leadingZero(time)
{	
	//return ("0"+time).slice(-2)
	if (time <=9) {
		time = "0"+time;
	}
	return time
}
 
function formatTime(time)
{
	var hrs, mins, secs;
	hrs = Math.floor(time / 3600);
	mins = Math.floor((time - hrs * 3600)/60);
	secs = Math.floor(time -(hrs * 3600 + mins * 60));
	
	result =`${leadingZero(hrs)}:${leadingZero(mins)}:${leadingZero(secs)}`;
	return result;
}


console.log(formatDuration(62));
console.log(formatDuration(3662));


console.log(formatTime(62));//00:01:02
console.log(formatTime(3662));//01:01:40