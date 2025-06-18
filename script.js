// Create a webpage that allows the user to draw on the grid using their mouse.


// Set the default grid to 16x16 when the webpage is first rendered
const gridContainer = document.getElementById("grid-container")
console.log(gridContainer)

// Button to change the size of the grid (only limited up to 100)
const gridButton = document.getElementById("rightKnob")
console.log(gridButton)

//Reset button
resetButton = document.getElementById("leftKnob")
console.log(resetButton)

// Set the default grid to 16 x 16 when app is rendered
let defaultGrid = 16

// Change grid button will prompt the user 
// to enter a number (not exceeding 100)
// and have the current div be removed
// in exchange for the new grid number
// the user entered
gridButton.addEventListener("click", function() {
    const gridChange = prompt("how would you like your grid to look like?")
    defaultGrid = Number(gridChange)
    console.log("Grid Change",gridChange)
    console.log("Default Grid", defaultGrid)
    generateGrid(defaultGrid);
})

// Use a for loop to generate new divs for grid-container
//Check if user entered their own grid number through prompt

function generateGrid(defaultGrid) {
    console.log("before wipe", gridContainer.children.length)
    gridContainer.innerHTML=""
    console.log("After wipe", gridContainer.children.length)
    for (i = 0; i < defaultGrid * defaultGrid; i++) {

        // Create a variable that will generate a div
        // These div's will generate until the for loop meets its condition
        const gridCell = document.createElement(`div`);
        gridCell.classList.add("grid-cell");

        // The grid-cell class will be appended as a child to the 
        // containerGrid in order for the cells to be displayed
        gridContainer.appendChild(gridCell);

        // whenever the user clicks on a grid-cell, the background colour 
        // should be turned to black
        gridCell.addEventListener("mousemove", function() {
        gridCell.classList.add("hover");
    })

    // Reset the cell's back to white when clicking on reset button
    resetButton.addEventListener("click", function(){
        gridCell.classList.remove("hover")
    })

    // If change grid button is clicked and user enters a prompt
    // remove the current divs in exchange for the new grid number
}}

generateGrid(defaultGrid);

//Add a button on the top of the screen 
// that will send the user a popup asking 
// for the number of squares per side for 
// the new grid. Once entered, the existing 
// grid should be removed, and a new grid 
// should be generated in the same total 
// space as before (e.g., 960px wide) so 
// that you’ve got a new sketch pad.
