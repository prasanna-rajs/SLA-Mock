function showTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add leading zeros
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;
}

// Update clock every second
setInterval(showTime, 1000);

// Show immediately when page loads
showTime();
