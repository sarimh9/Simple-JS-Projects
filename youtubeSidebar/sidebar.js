const openSidebarBtn = document.querySelector(".open-sidebar-btn");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");

openSidebarBtn.addEventListener("click", () => {
//   $(".section2").addClass("hide");
//   $(".sidebar").removeClass("hide");
  $(".sidebar").toggleClass("show-sidebar");
});

closeSidebarBtn.addEventListener("click", () => {
//   $(".section2").removeClass("hide");
//   $(".sidebar").addClass("hide");
  $(".sidebar").toggleClass("show-sidebar");
});

