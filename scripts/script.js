const btnUp = document.querySelector("#footer__button");
btnUp.addEventListener("click", screenUp());

function screenUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная анимация прокрутки
  });
}
function showDialog() {
  const dialog = document.getElementById("popup-id");
  dialog.classList.add("open");
  dialog.showModal();
}

function closeDialog() {
  const dialog = document.getElementById("popup-id");
  dialog.classList.remove("open");
  dialog.classList.add("close");
  setTimeout(() => {
    dialog.close();
    dialog.classList.remove("close");
  }, 500);
}
