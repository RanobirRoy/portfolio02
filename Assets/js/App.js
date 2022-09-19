const navToggle = document.querySelector(".nav-toggle");
const toggleClass = document.querySelector(".nav-wraper");
navToggle.addEventListener("click", () => {
  toggleClass.classList.toggle("nav-active");
});

const preHidden = document.querySelector(".preloader");
window.addEventListener("load", preHide);
function preHide() {
  preHidden.classList.add("preloader-hide");
}
