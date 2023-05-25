const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector("#output");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");

let firstvalue = "";
let isfirstvalue = false;

let secondvalue = "";
let issecondvalue = false;

result.value = ""

function insert(num) {
    result.value += num;
}

function clearResult() {
    result.value = "";
}

function deleteNum() {
    result.value = result.value.slice(0, -1);
}

function calc() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        result.value = "Error";
    }
}

negative.addEventListener("click", () => {
    if (result.value !== "") {
        result.value *= -1;
    }
});

percent.addEventListener("click", () => {
    if (result.value !== "") {
        result.value = result.value / 100;
    }
});
