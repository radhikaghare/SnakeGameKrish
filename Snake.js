class Snake{
    constructor(){
        this.snakeX = [];
        this.snakeY = [];
        this.xdir = 0;
        this.ydir = 0;
        this.tailCount = 1;
        this.x = 0;
        this.y =0;
      
    }

    eat(x,y){
        if(this.x === x && this.y === y){
            this.tailCount++
            return true;
        }
        else{
            return false;
        }
    }

    update(){
        this.x+=this.xdir;
        this.y+=this.ydir;
        if(this.snakeX.length >= this.tailCount){  //Deleting old positions if the number of positions is more than the tail count
            this.snakeX.shift();    //Deleting one old position
            this.snakeY.shift();    //Deleting one old position
          }

        //console.log("update"+this.xdir,this.ydir)
        //console.log("update x pos"+ this.x,this.y)
        this.snakeX.push(this.x);
        this.snakeY.push(this.y);
    }

    display(){
        for(var i = 0; i < this.tailCount; i++){
           
            var CY = this.snakeY[i];
            var CX = this.snakeX[i];
            console.log(CX,CY)
            fill(255);
            rect(CX, CY, 10, 10);
        }

    }
}