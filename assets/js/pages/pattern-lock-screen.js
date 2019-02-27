
    function updateClock ( )
 	{
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 24 ) ? "" : "";

  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 24 ) ? currentHours - 24 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 24 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
  	
  	
   	$("#time").html(currentTimeString);
   	  	
 }

$(document).ready(function(){
    var lock = new PatternLock("#patternContainer");
    lock.checkForPattern("45371", function() {
        window.location.href = "home.html";
    });
    setInterval('updateClock()', 1000);
    
    var objToday = new Date(),
                weekday = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'),
                dayOfWeek = weekday[objToday.getDay()],
                dayOfMonth = objToday.getDate(),
                months = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'),
                curMonth = months[objToday.getMonth()],
                curYear = objToday.getFullYear();
var today = dayOfWeek + "," + "<br>" + dayOfMonth + " " + curMonth + " " + curYear;
    
    
   	$("#date").html(today);
});