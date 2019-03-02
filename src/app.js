var s ;
var time = 300; // in seconds
var food;
function setup(){
 createCanvas(1200,500);
 s= new Snake();
 s.setup(4);
 frameRate(10);
 food = pickLocation();
 timer();
 }
function timer(){
    var timer = document.getElementById("timer");
    if(time > 0){
        time = time-1;
        timer.innerText = time ;
    }
}
setInterval(timer,1000);
function increaseCounter(){
    var counter = document.getElementById("counter");
    counter.innerText = parseInt(counter.innerText)+10;
}

function pickLocation(){
    var cols = floor(width/10);
    var rows = floor(height/10);
    
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(10);
    return food;
}

function draw(){
    background("black");
    
    if(time >0){
        s.update();
    }else{       
        fill("red");
        textSize(25);
        textStyle(BOLD);
        text("Time up", (width/2)-50, height/2);
    }
    s.show();
    if(s.eat(food)){
        pickLocation();
    }
    fill(255,0,200);
    rect(food.x, food.y, 10,10);
    rotate(10,10);
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        s.dir(0,-1);
    }else if(keyCode === DOWN_ARROW){
        s.dir(0,1);
    }else if(keyCode === LEFT_ARROW){
        s.dir(-1,0);
    }else if(keyCode === RIGHT_ARROW){
        s.dir(1,0);
    }
    
}
