
var d = new Date();


var day = d.getDay();

   if ( day == 0 ) {
      day = "Sunday";
   } else if ( day == 1 ) {
      day = "Monday";
   }
   else if ( day == 2 ) {
      day = "Tuesday";
   }
   else if ( day == 3 ) {
      day = "Wednesday";
   }
   else if ( day == 4 ) {
      day = "Thursday";
   }
   else if ( day == 5 ) {
      day = "Friday";
   }
   else {
      day = "Saturday";
   }

document.getElementById('day').innerHTML = day;


var dayNum = d.getDate();
document.getElementById('day-number').innerHTML = dayNum;

var hour = d.getHours();
document.getElementById('hour').innerHTML = hour;

var seconds = d.getSeconds();
document.getElementById('seconds').innerHTML = seconds;

var minutes = d.getMinutes();
document.getElementById('minutes').innerHTML = minutes;

var month = d.getMonth();

   if ( month == 0 ) {
      month = "January";
   } else if ( month == 1 ) {
      month = "February";
   }
   else if ( month == 2 ) {
      month = "March";
   }
   else if ( month == 3 ) {
      month = "April";
   }
   else if ( month == 4 ) {
      month = "May";
   }
   else if ( month == 5 ) {
      month = "June";
   }
   else if ( month == 6 ) {
      month = "July";
   }
   else if ( month == 7 ) {
      month = "August";
   }
   else if ( month == 8 ) {
      month = "September";
   }
   else if ( month == 9 ) {
      month = "October";
   }
   else if ( month == 10 ) {
      month = "November";
   }
   else {
      month = "December";
   }


document.getElementById('month').innerHTML = month;

var year = d.getFullYear();
document.getElementById('year').innerHTML = year;
