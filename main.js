const button = document.getElementById("button-download")

button.addEventListener("click", function onClick () {
button.style.backgroundColor = "blue";

});
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#d93838";
  });

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#FF6464";
});
