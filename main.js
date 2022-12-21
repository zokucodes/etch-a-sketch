const nextColor = document.querySelector("#currentRGB")
const gridSquare = document.getElementsByClassName("cell")
const resetButton = document.querySelector("#gridReset")
const gridResolution = document.querySelector("#gridUnits")

let squareColor = "black"
let gridUnit = 8

//rgb maker
function colorInGrid(event) {  
    squareColor = generateRgb();
    nextColor.style.backgroundColor = squareColor
}

//creates value for random rgb value
function generateRgb() {
    var number = Math.round(0xffffff * Math.random());
    var r = number >> 16;
    var g = number >> 8 & 255;
    var b = number & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

//generate grid divs
function Grid(gridNumber) {
    let _gridTotal = gridUnit * gridUnit;
    for (let i = 1; i <= _gridTotal; i++) {
        let _gridItem = document.createElement('div');
        _gridItem.classList.add('cell');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', _gridItem);
        
    }
    for (i = 0; i < _gridTotal; i++) {
        gridSquare[i].addEventListener('mouseenter', function (event) {
            event.target.style.backgroundColor = squareColor;
            const gridSquares = document.querySelectorAll('.gridSquare');
            gridSquare.forEach(cell => gridSquare.addEventListener("mouse"), colorInGrid() );


        } ) 
    
    }
}


//reset grid
resetButton.addEventListener("click", function () {
    for (i=0; i < (gridUnit * gridUnit); i++) {
        gridSquare[i].style.backgroundColor = "#ededee";
    }
})

//choose resolution
gridResolution.addEventListener("mouseup", function() {
    gridUnit = this.value;
    Grid(gridUnit);
    for (i=0; i < (gridUnit * gridUnit); i++) {
        gridSquare[i].style.backgroundColor = "#ededee";
    }
  })


Grid(gridUnit);

