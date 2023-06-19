const slider = document.querySelector(".slider")
const sliderValue = document.querySelector(".slider-value")
sliderValue.textContent = slider.value

slider.oninput = function () {
    sliderValue.textContent = `${this.value}`
    sliderValue.append()
}