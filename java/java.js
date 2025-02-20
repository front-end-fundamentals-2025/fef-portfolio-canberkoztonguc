document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      document.body.style.backgroundColor = getRandomColor();
    }
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
