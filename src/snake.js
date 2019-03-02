function Snake(){
    this.x = 0;
    this.y = 0 ;
    this.xSpeed  = 1; 
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.dir = function(x,y){
        this.xSpeed = x;
        this.ySpeed = y;
    }
    this.setup = function(count){
        for(var i=0; i<count; i++){
            this.total++;
            this.tail[i] = createVector(this.x, this.y);
        }
    }
    this.update =function(){
        if(this.total == this.tail.length){
            for(var i=0 ; i<this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1];
            }
           
        }
       
        this.tail[this.total-1] = createVector(this.x, this.y);
        this.x  += this.xSpeed*10;
        this.y  += this.ySpeed*10;
        this.x = constrain(this.x, 0 , width-10);
        this.y = constrain(this.y,0,height-10);
      

    }
    this.show = function(){
        fill('white');
        
        for(var i=0 ; i<this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y,10,10);
        }
       // fillImg("url:('/assets/turtle.png')");
        rect(this.x,this.y,10,10);
    }
    this.eat = function(food){
        if(food){
            var d = dist(this.x, this.y, food.x, food.y);
            if(d<2){
                this.total++;
                increaseCounter();
                return true;
            }

        }
      
        return false;
    }

}