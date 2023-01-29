const faqArr = [
  {
    id: 0,
    ques: "Question 0",
    ans: "This is answer number 0 for question number 0",
  },
  {
    id: 1,
    ques: "Question 1",
    ans: "This is answer number 1 for question number 1",
  },
  {
    id: 2,
    ques: "Question 2",
    ans: "This is answer number 2 for question number 2",
  },
  {
    id: 3,
    ques: "Question 3",
    ans: "This is answer number 3 for question number 3",
  },
  {
    id: 4,
    ques: "Question 4",
    ans: "This is answer number 4 for question number 4",
  },
];

const content = document.querySelector(".content");

faqArr.forEach((element) => {
  content.innerHTML += `<div class="faq-box">
  <div class="question">
      <h3>${element.ques}</h3>
      <button class="toggle">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
  </div>
  <div class="answer-box dnone">
      <hr>
      <div class="answer">${element.ans}</div>
  </div>
</div>`;
});

const toggleBtn = document.querySelectorAll(".toggle");

toggleBtn.forEach((element) => {
  element.addEventListener("click", () => {
    closeAllExcept(element);
    element.classList.toggle("rotate");
    let currAnswerBox = element.parentElement.nextElementSibling;
    currAnswerBox.classList.toggle("dnone");
  });
});

function closeAllExcept(e) {
  toggleBtn.forEach((element) => {
    if (element != e) {
      element.classList.remove("rotate");
      let currBox = element.parentElement.nextElementSibling;
      currBox.classList.add("dnone");
    }
  });
}
