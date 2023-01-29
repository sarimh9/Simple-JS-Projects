let count = 0;

$('.reset').on('click',()=>{
    count = 0;
    setCountAndColor()
})

$(".dec").on("click", () => {
  count--;
  setCountAndColor();
});

$(".inc").on("click", () => {
  count++;
  setCountAndColor();
});

function setCountAndColor() {
  $(".count").text(count);
  if (count < 0) {
    $(".count").css("color", "red");
  } else if (count > 0) {
    $(".count").css("color", "green");
  } else {
    $(".count").css("color", "black");
  }
}
