const funDip = document.getElementById("fun-dip");

// const funDipQuery = document.querySelector("#fun-dip"); //#id
// const divQuery = document.querySelector("div") //#element
// const classQuery = document.querySelector(".your-class-here")  //#class

// funDip.addEventListener("click", (event) => {
//   funDip.style.height = "500px";
//   funDip.style.width = "500px";

//   if (funDip.style.backgroundColor === "rgb(186, 218, 85)") {
//     funDip.style.backgroundColor = "aqua";
//   } else {
//     funDip.style.backgroundColor = "#bada55";
//   }
// });

//# e is the same as (event) it's just shorthand
// funDip.addEventListener("mouseenter", e => {
//     funDip.style.borderRadius = "50%"
// })

// funDip.addEventListener("mouseleave", e => {
//     funDip.style.borderRadius = "0%"
// })

funDip.addEventListener("click", (e) => {
  funDip.classList.toggle("blue");
  funDip.classList.toggle("red");
});

const snickers = document.querySelector(".snickers");

snickers.addEventListener("click", handleOpen);

function handleOpen() {
  snickers.classList.toggle("open");

  if (snickers.innerText !== "SATISFIED") {
    snickers.innerText = "SATISFIED";
  } else {
    snickers.innerText = "You're not you when you're hungry";
  }
}

// let obj;
// const otherObj = {
//   thing: true,
// };

// obj = otherObj;

// obj.thing = false;

// console.log(otherObj);
