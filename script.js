document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid");
  for (let i = 1; i <= 70; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem);
  }
});
