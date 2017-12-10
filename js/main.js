var link = document.querySelector(".modal-open");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  popup.classList.add("modal-show");
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
