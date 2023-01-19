"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let score = [
    0,
    0
];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
score0El.textContent = "0";
score1El.textContent = "0";
current0El.textContent = "0";
current1El.textContent = "0";
const init = function() {
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    playing = true;
    score = [
        0,
        0
    ];
    currentScore = 0;
    activePlayer = 0;
    score0El.textContent = "0";
    score1El.textContent = "0";
    current0El.textContent = "0";
    current1El.textContent = "0";
    diceEl.classList.add("hidden");
    document.querySelector(`.player--1`).classList.remove("player--active");
    document.querySelector(`.player--0`).classList.add("player--active");
};
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = 1 - activePlayer;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};
score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add("hidden");
btnRoll.addEventListener("click", function() {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else switchPlayer();
    }
});
btnHold.addEventListener("click", function() {
    if (playing) {
        console.log("button is clicked");
        score[activePlayer] += currentScore;
        console.log(score[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if (score[activePlayer] >= 10) {
            console.log(`Player ${activePlayer + 1} wins!🏆`);
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        } else switchPlayer();
    }
});
btnNew.addEventListener("click", init);

//# sourceMappingURL=index.672d4772.js.map
