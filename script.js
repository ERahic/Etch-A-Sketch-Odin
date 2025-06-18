// Create a webpage that allows the user to draw on the grid using their mouse.


// Set the default grid to 16x16 when the webpage is first rendered
const gridContainer = document.getElementById("grid-container")
console.log(gridContainer)

// Set the default grid to 16 x 16 when app is rendered
let defaultGrid = 16
// Use a for loop to generate new divs for grid-container
for (i = 0; i < defaultGrid * defaultGrid; i++) {
    // Create a variable that will generate a div
    // These div's will generate until the for loop meets its condition
    const gridCell = document.createElement(`div`);
    gridCell.classList.add("grid-cell");
    // The grid-cell class will be appended as a child to the containerGrid in order for the cells to be displayed
    gridContainer.appendChild(gridCell);
}