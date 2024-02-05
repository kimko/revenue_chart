document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid'); // Get the container for the grid
    for (let i = 1; i <= 70; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const value = document.createElement('div');
        value.classList.add('value');
        value.textContent = i;
        gridItem.appendChild(value);

        // Create the container for the multiplication column
        const columnContainer = document.createElement('div');
        columnContainer.classList.add('multiples-column');
        
        // Append the container to the grid item to ensure it aligns at the top
        gridItem.appendChild(columnContainer);

        // Append multiples starting with the second, within the column
        for (let j = 2; j <= 9; j++) {
            if (j <= 7) { // For the column: 2nd to 7th multiples
                const multiple = document.createElement('div');
                multiple.textContent = i * j;
                columnContainer.appendChild(multiple);

                if (j === 4) {
                    const line = document.createElement('div');
                    line.classList.add('horizontal-line');
                    columnContainer.appendChild(line);
                }
            } else { // For the row: 8th to 9h multiples
                if (j === 8) { // Initialize row container the first time
                    const rowContainer = document.createElement('div');
                    rowContainer.classList.add('multiples-row');
                    gridItem.appendChild(rowContainer);
                }
                const rowMultiple = document.createElement('span');
                rowMultiple.textContent = i * j;
                gridItem.lastChild.appendChild(rowMultiple);
            }
        }

        // Append the grid item to the grid container
        gridContainer.appendChild(gridItem);
    }
});
