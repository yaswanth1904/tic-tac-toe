let boxes=document.querySelectorAll(".boxes");
let reset=document.querySelector(".reset");
let start=document.querySelector(".start");
let msg1=document.querySelector(".hide");
let msg=document.querySelector(".msg");
let turn=true;



const resetGame = () => {
turn=true;
enabledBoxes();
msg1.classList.add("hide");

}



const disabledBoxes = () => {
    for(box of boxes) {
        box.disabled=true;
    }
}

const enabledBoxes = () => {
    for(box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
}
let wining= [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
boxes.forEach((box)=> {
box.addEventListener("click",()=> {
    console.log("button wasclicked")
    if(turn) {
        box.innerHTML="X";
  
        turn=false;
    }
    else {
        box.innerHTML="O";
        turn=true;
    }
    box.disabled=true;
    winner();
})
});

const showresult = (winner) => {
    msg.innerHTML=`congratulation winner is ${winner}`;
    msg1.classList.remove("hide");
}
 
const winner = () => {
    for(pattern of wining) {
    let patval1 =boxes[pattern[0]].innerHTML;
    let patval2 =boxes[pattern[1]].innerHTML;
    let patval3 =boxes[pattern[2]].innerHTML;

    if(patval1 !="" && patval2 !="" && patval3 !="") {
        if(patval1==patval2 && patval2==patval3) {

        showresult(patval1);
        disabledBoxes();
        }
    }
    }
}

reset.addEventListener("click",resetGame);
start.addEventListener("click",resetGame);