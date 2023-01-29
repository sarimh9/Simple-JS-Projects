const toggleBtn = document.querySelector(".toggle-menu");

toggleBtn.addEventListener("click", () => {
  //   $(".ul").css("display", "flex");
  const ul = document.querySelector(".ul");
  ul.classList.toggle("dnone");
});
