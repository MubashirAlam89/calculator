let btns = document.querySelectorAll(".cal");
let mainInp = document.getElementById("main-inp");
let historyInp = document.getElementById("history-inp");
let equalsBtn = document.getElementById("equal");
let clearBtn = document.getElementById("clear");

btns.forEach((e, i) => {
  e.addEventListener("click", (ev) => {
    let txt = ev.target.innerText;
    if (
      (mainInp.value === "" && txt === "+") ||
      (mainInp.value === "" && txt === "-") ||
      (mainInp.value === "" && txt === "*") ||
      (mainInp.value === "" && txt === "/") ||
      (mainInp.value === "" && txt === ".")
    ) {
      mainInp.value = "";
    } else {
      mainInp.value += txt;
    }
  });
});

equalsBtn.addEventListener("click", () => {
  if (mainInp.value !== "") {
    let equation = mainInp.value;
    let calculate = eval(equation);
    historyInp.value = equation;
    mainInp.value = calculate;
  }
});
clearBtn.addEventListener("click", () => {
  historyInp.value = "";
  mainInp.value = "";
});
