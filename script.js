var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#two").addEventListener("click", () => {
  changeCount(2);
});

document.querySelector("#three").addEventListener("click", () => {
  changeCount(3);
});

document.querySelector("#fore").addEventListener("click", () => {
  changeCount(4);
});

document.querySelector("#five").addEventListener("click", () => {
  changeCount(5);
});

document.querySelector("#six").addEventListener("click", () => {
  changeCount(6);
});

document.querySelector("#seven").addEventListener("click", () => {
  changeCount(7);
});

document.querySelector("#eight").addEventListener("click", () => {
  changeCount(8);
});

document.querySelector("#nine").addEventListener("click", () => {
  changeCount(9);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
};
