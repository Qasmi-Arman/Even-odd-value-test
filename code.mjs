const form = document.querySelector("#searchbox");

form.addEventListener("submit", (e) => {
e.preventDefault();

const output = document.querySelector("#result");
const userInput = +document.querySelector("#value").value;



output.textContent = ` An ${userInput % 2 === 0 ? "Even" : "Odd"} number`;
});