document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid"); // Get the container for the grid
  for (let i = 1; i <= 70; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const value = document.createElement("div");
    value.classList.add("value");
    value.textContent = i;
    gridItem.appendChild(value);

    // Create the container for the multiplication column
    const columnContainer = document.createElement("div");
    columnContainer.classList.add("multiples-column");

    // Append the container to the grid item to ensure it aligns at the top
    gridItem.appendChild(columnContainer);

    // Append multiples starting with the second, within the column
    for (let j = 2; j <= 9; j++) {
      if (j <= 7) {
        // For the column: 2nd to 7th multiples
        const multipleContainer = document.createElement("div");
        multipleContainer.classList.add("multiple-container");

        const xLabel = document.createElement("div");
        xLabel.textContent = `× ${j} =`;
        xLabel.classList.add("multiple-label");
        multipleContainer.appendChild(xLabel);

        const multiplication = document.createElement("div");
        multiplication.innerHTML = padWithNonBreakingSpaces(i * j, 3);

        multiplication.classList.add("multiple-value");
        multipleContainer.appendChild(multiplication);

        columnContainer.appendChild(multipleContainer);

        if (j === 4) {
          const line = document.createElement("div");
          line.classList.add("horizontal-line");
          columnContainer.appendChild(line);
        }

        if (j === 6) {
          multipleContainer.classList.add("bold-red");
        }
      } else {
        // For the row: 8th to 9h multiples
        if (j === 8) {
          // Initialize row container the first time
          const rowContainer = document.createElement("div");
          rowContainer.classList.add("multiples-row");
          gridItem.appendChild(rowContainer);
        }
        const rowMultiple = document.createElement("span");
        rowMultiple.textContent = i * j;
        gridItem.lastChild.appendChild(rowMultiple);
      }
    }

    // Append the grid item to the grid container
    gridContainer.appendChild(gridItem);
  }
});

function padWithNonBreakingSpaces(number, length) {
  let numberString = number.toString();
  while (numberString.length < length) {
      numberString = '\u00A0' + numberString; // Unicode for non-breaking space
  }
  return numberString;
}
