const navbar = document.getElementById("navbar");
const homeSection = document.getElementById("Home");


document.addEventListener('scroll', () => {
  if (window.pageYOffset > homeSection.offsetTop + homeSection.offsetHeight) {
    navbar.classList.add("bg-marine");
  } else {
    navbar.classList.remove("bg-marine");
  }
});