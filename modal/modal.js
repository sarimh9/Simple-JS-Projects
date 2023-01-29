const openModalBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hide-modal");
  $(".body-box").addClass("blur");
});

closeModalBtn.addEventListener("click", () => {
  removeModal();
});

window.onscroll = pageScrollAction;

function pageScrollAction() {
  if (!modal.classList.contains("hide-modal")) {
    let modalClosingTime = 3;
    const myTimeout = setInterval(() => {
      $("p").text(`Page scrolled, Closing Modal in ${modalClosingTime}s`);
      modalClosingTime--;
    }, 500);

    setTimeout(() => {
      removeModal();
      clearTimeout(myTimeout);
    }, modalClosingTime * 1000);
  }
}

function removeModal() {
  modal.classList.add("hide-modal");
  $(".body-box").removeClass("blur");
}
