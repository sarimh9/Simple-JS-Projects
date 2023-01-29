const reviewData = [
  {
    userName: "Name 1",
    post: "Post 1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium dolore, iure natus voluptatem sequi ipsum inventore dolores non vel, fugiat praesentium fugit adipisci enim. Minus culpa eaque dignissimos quo.",
    imgUrl: "https://img.icons8.com/ios-glyphs/2x/user.png",
  },
  {
    userName: "Name 2",
    post: "Post 2",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus impedit voluptas    officiis exercitationem. At obcaecati dicta quaerat quo, commodi, excepturi molestiae unde nihil    distinctio voluptas magnam porro iure rem quod.",
    imgUrl: "https://img.icons8.com/material-outlined/2x/user.png",
  },
  {
    userName: "Name 3",
    post: "Post 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab, nisi delectus ipsa voluptate    recusandae aut dolores! Excepturi eum rerum sint? Eligendi aspernatur dicta tempora qui magnam est magni    error.",
    imgUrl: "https://img.icons8.com/android/2x/user.png",
  },
  {
    userName: "Name 4",
    post: "Post 4",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur magnam tempora necessitatibus quos! Assumenda cumque quaerat impedit est tenetur facere obcaecati voluptatum qui, labore odio voluptas maiores esse at fugiat.",
    imgUrl: "https://img.icons8.com/tiny-glyph/2x/user.png",
  },
];

let currIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
  updateData(0);
});

$(".right").on("click", function () {
  currIndex++;
  if (currIndex >= 4) {
    currIndex = 0;
  }
  updateData(currIndex);
});
$(".left").on("click", function () {
  currIndex--;
  if (currIndex <= -1) {
    currIndex = 3;
  }
  updateData(currIndex);
});
$(".random").on("click", function () {
  let randInd = Math.floor(Math.random() * 4);
  updateData(randInd);
});

function updateData(index) {
  $(".image").attr("src", reviewData[index].imgUrl);
  $(".name").text(reviewData[index].userName);
  $(".post").text(reviewData[index].post);
  $(".desc").text(reviewData[index].desc);
}
