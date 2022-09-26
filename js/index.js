
//Game constans
let inputDir={x:0, y:0};
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/bgmusic.mp3');
musicSound.loop;
musicSound.volume=0.1;
let speed=5;
lastPaintTime=0;
let SnakeArr=[

    {x:13, y:15}
];
 food={x:6, y:7};

//game functions

function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-lastPaintTime)/1000 <1/speed){
        return;
    }
    lastPaintTime=ctime;

    gameEngine();

}
function isCollide(Snake){
      // If you bump into yourself
      for (let i = 1; i < SnakeArr.length; i++) {
        if(Snake[i].x === Snake[0].x && Snake[i].y === Snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(Snake[0].x >= 18 || Snake[0].x <=0 || Snake[0].y >= 18 || Snake[0].y <=0){
        return true;
    }
    return false;
}
function gameEngine(){
    // Part 1: Updating the snake array & Food
    if(isCollide(SnakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir= {x:0, y:0};
        alert("game Over Press Any Key");
        SnakeArr=[ {x:13, y:15}];
        musicSound.play();
        score=0;

    }
    //if you have etten the food then incremment the score and re genarated the food 
    if(SnakeArr[0].y===food.y && SnakeArr[0].x===food.x){
        foodSound.play();
    SnakeArr.unshift({x:SnakeArr[0].x+inputDir.x, y:SnakeArr[0].y+inputDir.y});
    let a=2;
    let b=16;
    food={x:Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
    }
    //moving the Snake
    for (let i =SnakeArr.length-2; i >=0; i--) {
        // const element = array[i];
        SnakeArr[i+1]={...SnakeArr[i]};
    }
    SnakeArr[0].x +=inputDir.x;
    SnakeArr[0].y +=inputDir.y;


    //Part 2: Display the snake 
board.innerHTML="";
SnakeArr.forEach((e,index)=>{
    SnakeElement=document.createElement('div'); 
    SnakeElement.style.gridRowStart=e.y;
    SnakeElement.style.gridColumnStart=e.x;
    // SnakeElement.classList.add('snake');
    if(index===0){

        SnakeElement.classList.add('head');
    }
    else{
        SnakeElement.classList.add('snake');
    }
    board.appendChild(SnakeElement);
});
//and food
foodElement=document.createElement('div'); 
foodElement.style.gridRowStart=food.y;
foodElement.style.gridColumnStart=food.x;
foodElement.classList.add('food');
board.appendChild(foodElement);



}

//main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}//start game
    moveSound.play(); 
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "w":
            console.log("w");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "s":
            console.log("s");
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "a":
            console.log("a");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
        case "d":
            console.log("d");
            inputDir.x=1;
            inputDir.y=0;
            break;
    
        default:
            break;
    }

});