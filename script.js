const slider = document.querySelector(".slider")
const sliderValue = document.querySelector(".slider-value")
sliderValue.textContent = `${slider.value} x ${slider.value}`

slider.oninput = function () {
    sliderValue.textContent = `${this.value} x ${this.value}`
    sliderValue.append()
}

const paintbrush = document.querySelector(".paintbrush")
const colorPicker = document.querySelector(".color-picker")

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