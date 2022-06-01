const drawHeight = 960;
const drawWidth = 960;
let numberOfRows = 80;
let numberOfColumns = 80;
let currentRow=0;
let currentColumn=0;

const sketchArea = document.querySelector('#sketchArea');

/* Create templates for a row and a box */
const rowTemplate = document.createElement('div');
const boxTemplate = document.createElement('div');

/* Assign the templates a class so they inherit our CSS format */
rowTemplate.classList.toggle('gridRow');
boxTemplate.classList.toggle('gridBox');    

console.log(rowTemplate);
console.log(boxTemplate);

function resizeSketch()
{
    let newSize = 0;
    while ((newSize < 20) || (newSize > 100)) {
        newSize = Number(window.prompt("Enter a new grid size between 20 and 100."));
        console.log(newSize);
    };
    numberOfColumns = numberOfRows = newSize;
}

function initSketch() 
{
    /* First, loop through the sketchArea and remove all elements/children */
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }

    /* Iterate through the number of rows needed */
    for (currentRow=0; currentRow<numberOfRows; currentRow++) {
        /* Make a new row and set its properties */
        const rowTemplate = document.createElement('div');
        rowTemplate.classList.toggle('gridRow');
        rowTemplate.style.height = ((drawHeight / numberOfRows) + "px");
        /* Now inside the row, make all the boxes we need for that row */
        for (currentColumn=0; currentColumn < numberOfColumns; currentColumn++) {
            const boxTemplate = document.createElement('div');
            boxTemplate.style.width = ((drawWidth / numberOfColumns) + "px");
            boxTemplate.style.height = ((drawHeight / numberOfRows) + "px");
            boxTemplate.style.backgroundColor = "white";
            boxTemplate.classList.add("gridBox");
            boxTemplate.addEventListener('mouseenter',(event) => {
                event.target.style.transition = "background-color 0s 0s";
                event.target.style.backgroundColor = "red";
            });
 /*           boxTemplate.addEventListener('mouseleave',(event) => {
                event.target.style.transition = "background-color 3s 1s";
                event.target.style.backgroundColor = "white";
            });*/
            rowTemplate.appendChild(boxTemplate);
        }
        sketchArea.appendChild(rowTemplate);
    }
}

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click',(event) => {
    initSketch();
});

const resizeButton = document.querySelector('#resizeButton');
resizeButton.addEventListener('click',(event) => {
    resizeSketch();
    initSketch();
});


initSketch();