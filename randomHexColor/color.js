const hexArray = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

$(".generateColor").on("click", () => {
  let currRandColor = getRandomColor();
  $("body").css("background-color", currRandColor);
  $("#answer").text(currRandColor);
});

$(".copy").on("click", () => {
  let copyText = document.getElementById("answer");
  console.log(copyText.textContent);
  navigator.clipboard.writeText(copyText.textContent);
  $(".hidden").removeClass("hidden");
  setTimeout(() => {
    $(".copied-text").addClass("hidden");
  }, 1000);
});

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randNoBw0And15 = Math.floor(Math.random() * 16);
    color += hexArray[randNoBw0And15];
  }
  return color;
}
