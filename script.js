// write your JavaScript here
const menuBtn = document.querySelector(".humburger");
const mblMenu = document.querySelector(".mbl_menu");
menuBtn.addEventListener("click", function () {
  mblMenu.classList.toggle("is_active");
});
