function Player(x, y){ //a constructor (i think)
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 100;

    this.step = function(){

    }

    this.draw = function(){
        ctx.fillStyle= "green";
        ctx.fillRect(this.x, this.y, this.width, this.height); //this.x because it will be changing in the future
    }
}