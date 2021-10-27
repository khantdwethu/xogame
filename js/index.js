const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const box = document.getElementsByClassName("box");
const user_info = document.getElementsByClassName("usr_info");

playerOne.textContent = `${localStorage.getItem('usrOne')}`;
playerTwo.textContent = `${localStorage.getItem("usrTwo")}`;

let plyerOnePick = [];
let playerTwoPick = [];
const winPoint = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let inTrun = 0;
var win = [];

function whoClick() {
    if (inTrun % 2 == 0) {

        return 'playerTwo';
    } else {

        return 'playerOne';
    }
}

function clickdisable() {
    for (let index = 0; index < box.length; index++) {
        box[index].setAttribute('onclick', "null");
    }
}

function clickable() {
    for (let index = 0; index < box.length; index++) {
        box[index].setAttribute('onclick', ` choose(${index});this.onclick=null;`);
    }
}


function boxEffect() {
    win.map(ele =>
        box[ele].classList.add('active')
    )
}

function removeBoxEffect() {
    for (let index = 0; index < box.length; index++) {
        box[index].innerHTML = "";
        box[index].classList.remove('active');
    }
}

function winSituation() {
    boxEffect();
    clickdisable();
}

function reset() {
    inTrun = 0;
    plyerOnePick = [];
    playerTwoPick = [];
    activeusrEffect(0);
    removeBoxEffect();
    clickable();
}

function isWin(playerPoint) {
    if (playerPoint.length >= 3) {

        winPoint.map(pointarray => {
            win = [];
            playerPoint.map(point => {
                let pattern = new RegExp(point);
                pattern.test(pointarray.join("")) && win.push(point);
            })

            return win.length === 3 && winSituation(win);
        })
    }
}

function render(boxno, signal) {
    box[Number(boxno)].innerHTML = `<span class="${signal}">${signal}</span>`;
}

function drawBoard(whois, boxno) {
    if (whois === "playerOne") {

        render(boxno, "x");

        plyerOnePick.push(boxno);
        isWin(plyerOnePick);
        activeusrEffect(1);
    } else if (whois == "playerTwo") {

        render(boxno, "o");

        playerTwoPick.push(boxno);
        isWin(playerTwoPick);
        activeusrEffect(0);
    }
}

function activeusrEffect(index) {
    user_info[index].classList.add('acitve');
    removeusrEfffect(index === 1 ? 0 : 1)
}

function removeusrEfffect(index) {
    user_info[index].classList.remove("acitve");
}

activeusrEffect(0);

function choose(boxno) {
    inTrun++;
    const whois = whoClick();
    drawBoard(whois, boxno);
}