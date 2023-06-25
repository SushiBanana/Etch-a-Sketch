const slider = document.querySelector(".slider")
const sliderValue = document.querySelector(".slider-value")
sliderValue.textContent = `${slider.value} x ${slider.value}`
const paintbrush = document.querySelector(".fa-paintbrush")
const colorPicker = document.querySelector(".color-picker")
const gridContainer = document.querySelector(".grid-container")
const applyChanges = document.querySelector(".apply-changes")
const eraser = document.querySelector(".eraser")
const changeBg = document.querySelector(".change-bg")

slider.oninput = function () {
    sliderValue.textContent = `${this.value} x ${this.value}`
    sliderValue.append()
}

colorPicker.oninput = function () {
    paintbrush.setAttribute("style", 
    `color: ${this.value}`)
}

changeBg.oninput = function () {
    gridContainer.style.backgroundColor = this.value
}

function createDiv(squareSize) {
    let div = document.createElement("div");
    div.classList.add('square');
    div.style.height = `${squareSize}px`;
    div.style.width = `${squareSize}px`;
    return div;
}

createGrid(slider.value)

function createGrid(gridsize) {
    for ( i= 0 ; i < gridsize ; i++) {
        for (j = 0 ; j < gridsize ; j++) {
            gridContainer.appendChild(createDiv(gridContainer.clientWidth / gridsize))
        }
    }
}

function apply() {
    while (gridContainer.firstElementChild) {
        gridContainer.lastElementChild.remove()
    }
    createGrid(slider.value)
}

applyChanges.addEventListener("click", apply);

gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.matches(".square")) {
        event.target.style.backgroundColor = colorPicker.value;
        event.target.style.cursor = "crosshair";
    }
})

eraser.addEventListener("click", function() {
    eraser.classList.toggle("active")
})

let isEraserActive = false;

eraser.addEventListener("click", ()=> {
    isEraserActive = !isEraserActive
})

if (isEraserActive) {
    eraser.classList.add("active")
} else {
    eraser.classList.remove("active")
}


gridContainer.addEventListener("mouseover", function(event) {
    if (isEraserActive && event.target.matches(".square")) {
        event.target.style.backgroundColor = "";
        event.target.style.cursor = "crosshair";
    }
})
