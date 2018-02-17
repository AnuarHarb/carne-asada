var today = new Date();
const finishDate = new Date('4/27/2018');

const msecPerMinute = 1000 * 60;
const msecPerHour = msecPerMinute * 60;
const msecPerDay = msecPerHour * 24;

var timeToWin = finishDate - today;
var timeToWinInMinutes = Math.floor(timeToWin / msecPerMinute);
var timeToWinInHours = Math.floor(timeToWin / msecPerHour);
var timeToWinInDays = Math.floor(timeToWin / msecPerDay);
var weeksRemaining = Math.floor(timeToWinInDays / 7);
var daysRemaining = Math.floor(timeToWinInDays % 7);
var hoursRemaining = Math.floor((timeToWin - (timeToWinInDays * msecPerDay)) / msecPerHour);
var minutesRemaining = Math.floor((timeToWin - (timeToWinInHours * msecPerHour)) / msecPerMinute);

var weeks = document.querySelector('.weeks');
var days = document.querySelector('.days');
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');

if (weeksRemaining == 1) {
  weeks.innerHTML = weeksRemaining + '<span class="counterWords">SEMANA</span>';
} else {
  weeks.innerHTML = weeksRemaining + '<span class="counterWords">SEMANAS</span>';
}
if (daysRemaining == 1) {
  days.innerHTML = daysRemaining + '<span class="counterWords">DÍA</span>';
} else {
  days.innerHTML = daysRemaining + '<span class="counterWords">DÍAS</span>';
}
if (hoursRemaining == 1) {
  hours.innerHTML = hoursRemaining + '<span class="counterWords">HORA</span>';
} else {
  hours.innerHTML = hoursRemaining + '<span class="counterWords">HORAS</span>';
}
if (minutesRemaining == 1) {
  minutes.innerHTML = minutesRemaining + '<span class="counterWords">MINUTO</span>';
} else {
  minutes.innerHTML = minutesRemaining + '<span class="counterWords">MINUTOS</span>';
}
