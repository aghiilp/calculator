let display = document.getElementById("display");
let body = document.body;
let toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleBtn.textContent = "☀️";
}

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
    void display.offsetWidth; // restart animation
    display.classList.add("updated");
}

function toggleTheme() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

// new code
// 
// 
// 
function percent() {
    try {
        display.value = eval(display.value) / 100;
        animateDisplay();
    } catch (e) {   
        display.value = "Error";
        animateDisplay();
    }
}

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
        animateDisplay();
    } catch (e) {
        display.value = "Error";
        animateDisplay();
    }
}

function square() {
    try {
        let val = eval(display.value);
        display.value = val * val;
        animateDisplay();
    } catch (e) {
        display.value = "Error";
        animateDisplay();
    }
}
