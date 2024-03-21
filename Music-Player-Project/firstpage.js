const iconid = document.getElementById("compress-icon");
const section = document.getElementById("music");
const playbutton1 = document.getElementById("playbutton1");
const playbutton2 = document.getElementById("playbutton2");
const playbutton3 = document.getElementById("playbutton3");
const playbutton4 = document.getElementById("playbutton4");

iconid.addEventListener("click", function () {
  section.classList.remove("show");
  section.classList.toggle("hide");
});
playbutton1.addEventListener("click", function () {
  section.classList.remove("hide");
  section.classList.toggle("show");
});
playbutton2.addEventListener("click", function () {
  section.classList.remove("hide");
  section.classList.toggle("show");
});
playbutton3.addEventListener("click", function () {
  section.classList.remove("hide");
  section.classList.toggle("show");
});
playbutton4.addEventListener("click", function () {
  section.classList.remove("hide");
  section.classList.toggle("show");
});
