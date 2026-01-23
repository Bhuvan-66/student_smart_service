let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculateFunction(func) {
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        display.value = "Error";
        return;
    }

    switch (func) {
        case "sin":
            display.value = Math.sin(value * Math.PI / 180);
            break;
        case "cos":
            display.value = Math.cos(value * Math.PI / 180);
            break;
        case "tan":
            display.value = Math.tan(value * Math.PI / 180);
            break;
        case "sqrt":
            display.value = Math.sqrt(value);
            break;
        case "log":
            display.value = Math.log10(value);
            break;
        case "pow":
            display.value = Math.pow(value, 2);
            break;
    }
}
