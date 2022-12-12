let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes

for(let i = 0; i < boxes.length; i++) {

    // quando alguém clica na caixa
    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        // verifica se já possui x ou o
        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar jogada

            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }

            // checar quem venceu

            checkWinCondition();

        }

    });

}

// ver quem vai jogar

function checkEl(player1, player2) {

    if(player1 == player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }

    return el;

}

// ver quem venceu

function checkWin(b1, b2, b3) {
        
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            // x
            console.log('x venceu');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            console.log('o venceu');
        }

    }

}

function checkWinCondition() {

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    // horizontal

    checkWin(b1, b2, b3);
    checkWin(b4, b5, b6);
    checkWin(b7, b8, b9);

    // vertical

    checkWin(b1, b4, b7);
    checkWin(b2, b5, b8);
    checkWin(b3, b6, b9);

    // diagonal

    checkWin(b1, b5, b9);
    checkWin(b3, b5, b7);

    // deu velha

    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {
        
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }

    }

    if(counter == 9) {
        console.log('deu velha');
    }

}