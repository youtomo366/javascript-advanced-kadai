const inputBox = document.getElementById("typingBox");
const countDisplay = document.getElementById("count");

inputBox.addEventListener("input", function () {
  countDisplay.textContent = inputBox.value.length;
});