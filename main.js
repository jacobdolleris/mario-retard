let knap = document.querySelector("#knap");

knap.addEventListener("click", ()=> {
    location.reload();
})

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
maze = 
[
    [1,1,1,2,1,1,1,1,1,1,1,1,1,1],
    [1,3,1,0,1,0,1,0,0,4,1,1,1,1],
    [1,0,0,0,1,0,1,0,1,1,1,1,1,1],
    [1,1,1,0,1,0,0,0,0,1,3,0,0,1],
    [1,0,0,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,0,1,0,0,0,0,1,1,1,0,1],
    [1,0,1,0,1,0,1,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,1,1,0,0,0,1,0,1],
    [1,0,0,0,1,0,0,0,0,1,0,1,0,1],
    [1,0,1,0,1,1,1,1,0,0,0,1,0,1],
    [1,0,1,0,0,0,0,1,0,1,1,1,0,1],
    [1,0,3,1,1,1,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    
    
]
let tileSize = 30;
let playerPosition = {x:0, y:0};
let playerimg = new Image();
playerimg.src="images/player.png"

let road = 0;
let wall = 1;
let player = 2;
let coin = 3;
let goal = 4;
let score = 0; 



function drawMaze(){
    window.addEventListener("load", drawMaze);
    for(let y = 0; y < maze.length; y++){
        for(let x = 0; x < maze[y].length; x++){
            if(maze[y][x] === road){
                ctx.fillStyle = "darkgreen"
                ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize)
            }
            else if(maze[y][x] === wall){
                ctx.fillStyle = "lightblue"
                ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize)
            }
            else if(maze[y][x] === player){
                playerPosition.x = x;
                playerPosition.y = y;
                ctx.drawImage(playerimg,x*tileSize,y*tileSize,tileSize,tileSize)
            }
            else if(maze[y][x] === coin){
                ctx.fillStyle = "Yellow"
                ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize)
            }
            else if(maze[y][x] === goal){
                ctx.fillStyle = "Red"
                ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize)
                document.getElementById("points").innerHTML ="Your points: " + score;
            }
        }
    }
}
function walk(){
    let gameSound = new Audio("gameSound/walk.mp3");
    gameSound.volume = 0.1;
    gameSound.play();
}
// player movement
window.addEventListener("keydown", (e)=>{
    // left 37, up 38, right 39, down 40
 
    switch (event.keyCode) {
        case 37:
            if(maze[playerPosition.y][playerPosition.x-1] === 0){
                maze[playerPosition.y][playerPosition.x-1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                drawMaze();
                walk();
            }
            else if(maze[playerPosition.y][playerPosition.x-1] === coin){
                maze[playerPosition.y][playerPosition.x-1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                score++;
                drawMaze();
                walk();
            }

            else if(maze[playerPosition.y][playerPosition.x-1] === goal && score === 3){
                maze[playerPosition.y][playerPosition.x-1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                alert("You Won")
                location.reload();
                drawMaze();
                walk();
            }
            
            break;
        case 38:
            if(maze[playerPosition.y-1][playerPosition.x] === 0){
                maze[playerPosition.y-1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                drawMaze();
                walk();
            }
            else if(maze[playerPosition.y-1][playerPosition.x] === coin){
                maze[playerPosition.y-1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                score++;
                drawMaze();
                walk();
            }
            else if(maze[playerPosition.y-1][playerPosition.x] === goal && score === 3){
                maze[playerPosition.y-1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                alert("You Won")
                location.reload();
                drawMaze();
                walk();
            }
         
            break;
        case 39:
            if(maze[playerPosition.y][playerPosition.x+1] === 0){
                maze[playerPosition.y][playerPosition.x+1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                drawMaze();
                walk();
            }
            else if(maze[playerPosition.y][playerPosition.x+1] === coin){
                maze[playerPosition.y][playerPosition.x+1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                score++;
                drawMaze();
                walk();
            }


            else if(maze[playerPosition.y][playerPosition.x+1] === goal && score === 3){
                maze[playerPosition.y][playerPosition.x+1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                alert("You Won")
                location.reload();
                drawMaze();
                walk();
            }
            break;
        case 40:
            if(maze[playerPosition.y+1][playerPosition.x] === 0){
                maze[playerPosition.y+1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                drawMaze();
                walk();
            }
            else if(maze[playerPosition.y+1][playerPosition.x] === coin){
                maze[playerPosition.y+1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                score++;
                drawMaze();
                walk();
            }


            else if(maze[playerPosition.y+1][playerPosition.x] === goal && score === 3){
                maze[playerPosition.y+1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 0 //stedet hvor spilleren stod
                alert("You Won")
                location.reload();
                drawMaze();
                walk();
            }
            break;
    }
})
drawMaze();


var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 30;

function myTimer() {
if(secondlimit == 0)
{
    myStopFunction();
    alert("You lost");
}

document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
secondlimit = secondlimit  - 1;

}

function myStopFunction() {
    clearInterval(myVar);
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

