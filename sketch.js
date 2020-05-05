var move;

var snake;
var foodX;
var foodY;


function setup(){
    var canvas = createCanvas(800,600);
    snake = new Snake();
    foodLoc();
    frameRate(3);
    
}

function draw(){
    background(0);
    snake.update();
  // new location is generated when the snake eats the food
  if(snake.eat(foodX,foodY)){
    foodLoc();   //Getting location of Food
  }
  snake.display();
    noStroke();
    fill(255, 0, 0);
    rect(foodX, foodY, 10, 10);
}

function foodLoc(){
    foodX = floor(random(0,20))*20;
    foodY = floor(random(0,20))*20;

}

function keyPressed(){
    console.log("Inside keypressed")
    if(keyCode === LEFT_ARROW){
        snake.xdir = -10 ;
        snake.ydir = 0;
    }
    if(keyCode === RIGHT_ARROW){
        snake.xdir = 10;
        snake.ydir = 0;
    }
    if(keyCode === UP_ARROW){
        console.log("Inside up arrows")
        snake.ydir = -10;
        snake.xdir = 0;
    }
    if(keyCode === DOWN_ARROW){
        snake.ydir = 10;
        snake.xdir = 0;
    }
    
}
