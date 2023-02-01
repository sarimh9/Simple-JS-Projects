const sunsetTimeEle = document.getElementById("sunset-time");
const sunriseTimeEle = document.getElementById("sunrise-time");
const calculate = document.getElementById("calculate");
const result = document.querySelector(".result");

//* ==================== Event Listeners ====================

calculate.addEventListener("click", () => {
  const sunsetTime = String(sunsetTimeEle.value);
  const sunriseTime = String(sunriseTimeEle.value);

  if (sunsetTime == "" || sunriseTime == "") {
    result.textContent = "Incorrect Input";
    return;
  }

  result.textContent = calculateMidnight(sunsetTime, sunriseTime);
});

function calculateMidnight(sunsetTime, sunriseTime) {
  let totalNightLength = calculateTotalNightLength(sunsetTime, sunriseTime);
  console.log("Total Night Length : " + totalNightLength);
  let halfNightLength = totalNightLength / 2;

  let midnight = addHalfNightLengthToSunsetTime(sunsetTime, halfNightLength);

  return midnight;
}

function addHalfNightLengthToSunsetTime(sunsetTime, halfNightLengthMins) {
  let h = Number(Math.trunc(halfNightLengthMins / 60));
  let m = halfNightLengthMins % 60;
  let timeTillMidnight = h + ":" + m;

  return addTwoTime(sunsetTime, timeTillMidnight);
}

function addTwoTime(t1, t2) {
  console.log("Half Night Length: " + t2);

  let arr1 = t1.split(":");
  let arr2 = t2.split(":");

  let ansM = Number(arr1[1]) + Number(arr2[1]);
  let ansH = Number(arr1[0]) + Number(arr2[0]);

  if (ansM >= 60) {
    ansM %= 60;
    ansH++;
  }
  if (ansH >= 24) {
    ansH %= 24;
  }

  if (ansH == 0) ansH = 12;

  return ansH + ":" + ansM;
}

function calculateTotalNightLength(sunsetTime, sunriseTime) {
  let timeTill12FromSunset = calculateTimeTill12FromSunset(sunsetTime);
  let timeFrom12TillSunrise = calculateTimeFrom12TillSunrise(sunriseTime);
  let totalNightTime = timeTill12FromSunset + timeFrom12TillSunrise;
  return totalNightTime;
}

function calculateTimeTill12FromSunset(sunsetTime) {
  let t1Arr = sunsetTime.split(":");

  let h = Number(t1Arr[0]);
  let m = Number(t1Arr[1]);
  if (m == 0) {
    return (24 - h) * 60;
  } else {
    let hDiff = 24 - h;
    let totalMinutes = 60 - m + (hDiff - 1) * 60;
    return totalMinutes;
  }
}

function calculateTimeFrom12TillSunrise(sunriseTime) {
  let tArr = sunriseTime.split(":");

  let h = Number(tArr[0]);
  let m = Number(tArr[1]);

  return h * 60 + m;
}
