setInterval(() => {
  let currTime = new Date();
  let hours = currTime.getHours();
  if (hours <= 9) {
    hours = "0" + hours;
  }
  let minutes = currTime.getMinutes();
  let seconds = currTime.getSeconds();
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }
  let time = hours + ":" + minutes + ":" + seconds;
  $("#time").text(time);
}, 1000);
