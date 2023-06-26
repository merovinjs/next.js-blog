let models = [
  {
    name: "bmw 418d",
    image: "/1.png",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "mazda cx-3",
    image: "/2.png",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "renalt megane",
    image: "/3.png",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
];
let index = 2;
let slaytCount = models.length;

showSlide(index);
document.querySelector(".arrow-left").addEventListener("click", function () {
  index--;
  showSlide(index);
  console.log(index);
});
document.querySelector(".arrow-right").addEventListener("click", function () {
  index++;
  showSlide(index);
  console.log(index);
});
console.log(slaytCount);
function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-image")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

// let index = 0;
// let slaytCount = models.length;
// let interval;
// let settings = {
//   duration: "1000",
//   random: false,
// };

// init(settings);

// document.querySelector(".fa-arrow-left").addEventListener("click", function () {
//   index--;
//   showSlide(index);
//   console.log(index);
// });
// document
//   .querySelector(".fa-arrow-right")
//   .addEventListener("click", function () {
//     index++;
//     showSlide(index);
//   });

// document.querySelectorAll(".arrow").forEach(function (item) {
//   item.addEventListener("mouseenter", function () {
//     clearInterval(interval);
//   });
// });

// document.querySelectorAll(".arrow").forEach(function (item) {
//   item.addEventListener("mouseleave", function () {
//     init(settings);
//   });
// });

// function init(settings) {
//   var prev;
//   interval = setInterval(function () {
//     if (settings.random) {
//       do {
//         index = Math.floor(Math.random() * slaytCount);
//       } while (index == prev);
//       prev = index;
//     } else {
//       if (slaytCount == index + 1) {
//         index = -1;
//       }
//       showSlide(index);
//       index++;
//     }
//     showSlide(index);
//   }, settings.duration);
// }

// function showSlide(i) {
//   index = i;
//   if (i < 0) {
//     index = slaytCount - 1;
//   }
//   if (i >= slaytCount) {
//     index = 0;
//   }

//   document.querySelector(".card-title").textContent = models[index].name;

//   document
//     .querySelector(".card-img-top")
//     .setAttribute("src", models[index].image);

//   document.querySelector(".card-link").setAttribute("href", models[index].link);
// }
