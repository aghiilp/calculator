let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
        animateDisplay();
    } catch (e) {
        display.value = "Error";
        animateDisplay();
    }
}

function animateDisplay() {
    display.classList.remove("updated");
    void display.offsetWidth; // trick to restart animation
    display.classList.add("updated");
}
