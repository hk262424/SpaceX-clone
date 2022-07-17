// $(document).ready(function () {
//   var ctrlVideo = document.getElementById("video");
//   $("button").click(function () {
//     if ($("button").hasClass("active")) {
//       ctrlVideo.play();

//       $("button").html("Pause");
//       $("button").toggleClass("active");
//     } else {
//       ctrlVideo.pause();

//       $("button").html("play");
//       $("button").toggleClass("active");
//     }
//   });
// });

// Animation number
const countnum = document.querySelectorAll(".counter-numbers");

console.log(countnum);
const speed = 110;
countnum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);

    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);
    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 20);
    }
  };
  updateNumber();
});

