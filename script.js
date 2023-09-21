console.log("Welcome tp Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// function to change the turn
const changeTurn = ()=>{
return turn === "X"? "0": "X"

}

// function to check for a win
// win kaise check hoga uske liye ek line se x or 0 aana chahiye box me ,to condition lagane ke liye boxes me 0-9 numbers likh ke logic lga rhe rhe h ki inme se kisi bhi pair ko (horizontly(3)/vertically(3)/crisscross(2)) satisfy kre to wining condition hogi. 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

}

// Game Logic
// since collection of data rhega to array bnana hoga taki usme foreach lgake har ek boxtext pe eventlistner lga ske 
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("Info")[0].innerText = 'Turn for ' + turn;
        }
    }
    })
})

// add click listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("Info")[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})