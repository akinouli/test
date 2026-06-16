const scene = document.querySelector(".door-link");

scene.addEventListener("click", (e) => {

  e.preventDefault();

  scene.classList.add("open");

  setTimeout(() => {
    location.href = "./main.html";
  }, 3000);

});