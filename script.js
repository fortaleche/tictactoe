let isPlayerOne = true;
let cells = document.getElementsByClassName("casilla");

for( let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', userMove);
}

document.getElementById('reiniciar').addEventListener('click', reiniciar);

function userMove(e) {
    let celValue = e.target.innerHTML;
    if (!celValue.length) {
        e.target.innerHTML = isPlayerOne? 'x' : 'o';
        isPlayerOne = !isPlayerOne;

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);
        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);
        checkLine(0, 4, 8);
        checkLine(6, 4, 2);
    }
}

function checkLine(c1, c2, c3) {
    if (
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML == cells[c2].innerHTML &&
        cells[c2].innerHTML == cells[c3].innerHTML 
    ) {
        showhinner(cells[c1].innerHTML);
    }
}

function showhinner(player1) {
    document.querySelector('#results').innerHTML = player1 + " Ganador"; 
}

function reiniciar() {
    isPlayerOne = true;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    document.querySelector('#results').innerHTML = "";
}