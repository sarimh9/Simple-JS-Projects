function jokeFunction() {
  setTimeout(() => {
    const jokePromise = fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    jokePromise
      .then((value1) => {
        return value1.json();
      })
      .then((value2) => {
        $(".joke").removeClass("hide").text(value2.joke);
        $(".loader").addClass("hide");
      });
  }, 2000);
}
$("document").ready(jokeFunction);
$(".refresh").on("click", () => {
  $(".loader").removeClass("hide");
  $(".joke").addClass("hide");
  jokeFunction();
});
