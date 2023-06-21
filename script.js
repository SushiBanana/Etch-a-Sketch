const slider = document.querySelector(".slider")
const sliderValue = document.querySelector(".slider-value")
sliderValue.textContent = `${slider.value} x ${slider.value}`
const paintbrush = document.querySelector(".paintbrush")
const colorPicker = document.querySelector(".color-picker")
const gridContainer = document.querySelector(".grid-container")
const applyChanges = document.querySelector(".apply-changes")

slider.oninput = function () {
    sliderValue.textContent = `${this.value} x ${this.value}`
    sliderValue.append()
}

colorPicker.oninput = function () {
    paintbrush.setAttribute("style", 
    `filter:drop-shadow(1px 1px 0 ${this.value})
    drop-shadow(-1px 1px 0 ${this.value})
    drop-shadow(1px -1px 0 ${this.value})
    drop-shadow(-1px -1px 0 ${this.value}); 
    -webkit-filter: drop-shadow(1px 1px 0 ${this.value})
    drop-shadow(-1px 1px 0 ${this.value})
    drop-shadow(1px -1px 0 ${this.value})
    drop-shadow(-1px -1px 0 ${this.value});
    `)
}

function createDiv(squareSize) {
    let div = document.createElement("div")
    div.classList.add('square')
    div.style.height = `${squareSize}px`
    div.style.width = `${squareSize}px`
    return div;
}

createGrid(slider.value)

function createGrid(gridsize) {
    for (i=0 ; i < gridsize ; i++) {
        for (j=0 ; j < gridsize ; j++) {
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

applyChanges.addEventListener("click", apply)