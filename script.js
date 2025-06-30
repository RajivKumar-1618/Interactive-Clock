// Time Variable
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let second = document.getElementById("second");
let day = document.getElementById("day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

// getTime function
function getTime() {
  let arr_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let arr_months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let now = new Date();
  const hr = now.getHours().toString().padStart(2, "0");
  const min = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");
  const day_ = now.getDay();
  const date_ = now.getDate().toString().padStart(2, "0");
  const month_ = now.getMonth();
  const year_ = now.getFullYear().toString().padStart(2, "0");
  hours.textContent = hr;
  minutes.textContent = min;
  second.textContent = sec;
  day.textContent = arr_days[day_];
  date.textContent = date_;
  month.textContent = arr_months[month_];
  year.textContent = year_;
}
setInterval(getTime, 1000);

// Event-Listener Variable
let timeBox = document.getElementById("time-box");
let othersBox = document.getElementById("Others-box");
// listener function
function showOthers() {
  othersBox.setAttribute("style", "display: flex");
}
function HideOthers() {
  othersBox.setAttribute("style", "display: none");
}
timeBox.addEventListener("click", showOthers);
othersBox.addEventListener("click", HideOthers);
