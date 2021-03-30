let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

for (let btn of buttons) {
  btn.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === "X") {
      input.value += "*";
    } else if (buttonText === "C") {
      input.value = "";
    } else if (buttonText === "=") {
      try {
        input.value = eval(input.value);
      } catch (e) {
        input.value = "----/Err/----";
        console.log(e.message);
      }
    } else if (buttonText === "^") {
      input.value += "**";
    } else {
      input.value += buttonText;
    }
  });
}
