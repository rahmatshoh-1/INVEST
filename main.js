// window.addEventListener('scroll', function () {
//   const nav = document.querySelector('.header__nav');
//   if (window.scrollY > 100) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navList = document.getElementById("nav-list");

  burger.addEventListener("click", () => {
    navList.classList.toggle("active");
    burger.classList.toggle('active'); // добавляет активный класс
  });

  // Sticky при скролле
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".header__nav");
    if (window.scrollY > 100) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
});
