import "./style.css";

const successModalEl = document.getElementById("successModal");
const closeBtnEl = document.getElementById("close-btn");
const PaybtnEl = document.getElementById("pay-btn");


PaybtnEl.addEventListener("click", () => {
  successModalEl.classList.toggle("!flex");
  successModalEl.classList.remove("!hidden");
});

closeBtnEl.addEventListener("click", () => {
  successModalEl.classList.add("!hidden");
  successModalEl.classList.remove("!flex");
});