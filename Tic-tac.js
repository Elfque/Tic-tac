let input = document.querySelectorAll(".inp");
let title = document.querySelector(".title");
const player0 = document.querySelector(".player1");
const player1 = document.querySelector(".player2");
let score1 = document.querySelector(".score0");
let score2 = document.querySelector(".score1");
let scorecount0 = 0;
let scorecount1 = 0;
let playing = true;

let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");
let inp5 = document.querySelector(".inp5");
let inp6 = document.querySelector(".inp6");
let inp7 = document.querySelector(".inp7");
let inp8 = document.querySelector(".inp8");
let inp9 = document.querySelector(".inp9");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", () => {
    if (playing) {
      if (input[i].textContent.length == 0) {
        if (player0.className.includes("active")) {
          input[i].textContent = "X";
        } else if (player1.className.includes("active")) {
          input[i].textContent = "O";
        }
        player0.classList.toggle("active");
        player1.classList.toggle("active");
      }
    }

    if (
      inp1.textContent.length == 1 &&
      inp2.textContent.length == 1 &&
      inp3.textContent.length == 1 &&
      inp4.textContent.length == 1 &&
      inp5.textContent.length == 1 &&
      inp6.textContent.length == 1 &&
      inp7.textContent.length == 1 &&
      inp8.textContent.length == 1 &&
      inp9.textContent.length == 1
    ) {
      setTimeout(startOver, 1000);
    }

    line(inp1, inp2, inp3);
    line(inp1, inp4, inp7);
    line(inp1, inp5, inp9);
    line(inp2, inp5, inp8);
    line(inp3, inp5, inp7);
    line(inp4, inp5, inp6);
    line(inp3, inp6, inp9);
    line(inp7, inp8, inp9);
  });
}

const startOver = () => {
  title.textContent = "TIC TAC";
  inp1.textContent = "";
  inp2.textContent = "";
  inp3.textContent = "";
  inp4.textContent = "";
  inp5.textContent = "";
  inp6.textContent = "";
  inp7.textContent = "";
  inp8.textContent = "";
  inp9.textContent = "";
  inp1.disabled = false;
  inp2.disabled = false;
  inp3.disabled = false;
  inp4.disabled = false;
  inp5.disabled = false;
  inp6.disabled = false;
  inp7.disabled = false;
  inp8.disabled = false;
  inp9.disabled = false;
  playing = true;
};

const line = (input1, input2, input3) => {
  if (
    input1.textContent.length == 1 &&
    input2.textContent.length == 1 &&
    input3.textContent.length == 1
  ) {
    if (
      input1.textContent == input2.textContent &&
      input2.textContent == input3.textContent
    ) {
      playing = false;
      input1.classList.add("winner");
      input2.classList.add("winner");
      input3.classList.add("winner");
      if (input1.textContent === "X") {
        title.textContent = "PLAYER ONE WINS";
        scorecount0++;
        score1.innerHTML = scorecount0;
      } else if (input1.textContent === "O") {
        title.textContent = "PLAYER TWO WINS";
        scorecount1++;
        score2.innerHTML = scorecount1;
      }
      inp1.disabled = true;
      inp2.disabled = true;
      inp3.disabled = true;
      inp4.disabled = true;
      inp5.disabled = true;
      inp6.disabled = true;
      inp7.disabled = true;
      inp8.disabled = true;
      inp9.disabled = true;
      setTimeout(() => {
        startOver();
        input1.classList.remove("winner");
        input2.classList.remove("winner");
        input3.classList.remove("winner");
      }, 1000);
    }
  }
};
