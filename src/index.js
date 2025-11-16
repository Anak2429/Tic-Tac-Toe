let reset = document.getElementById("reset");
let bigBox =  document.querySelector(".parent");
let boxes = document.querySelectorAll(".box");
let x = document.querySelector(".X");
let o = document.querySelector(".O");
let winnerText = document.getElementById("winnerText");

let turn_of_o = true;

x.addEventListener("click", () => {
    turn_of_o = false;
});

let winning_patterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_of_o === true) {
            box.innerHTML = "<h1 style='color: red;'>O</h1>";
            turn_of_o = false;
        } else {
            box.innerHTML = "<h1 style='color: green;'>X</h1>";
            turn_of_o = true;
        }
        box.style.pointerEvents = "none";
        count++;
        if (count >= 5) {
            checkInner();
        }
    });
});

function checkInner() {
    for (let pattern of winning_patterns) {
        let pos1 = bigBox.children[pattern[0]].innerText.trim();
        let pos2 = bigBox.children[pattern[1]].innerText.trim();
        let pos3 = bigBox.children[pattern[2]].innerText.trim();

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                //console.log("winner", pos3);
                winnerText.innerText = "Winner: " + pos3;
                 boxes.forEach(b => b.style.pointerEvents = "none");
        setTimeout(() => {
            resetBoard();
        }, 1000);
            }
        }
    }
}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.style.pointerEvents = "auto";
    });
    count = 0;
    turn_of_o = true;
});
function resetBoard() {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.style.pointerEvents = "auto";
    });
    count = 0;
    turn_of_o = true;
}   