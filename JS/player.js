function Player(x, y){ //a constructor (i think)
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.friction = 0.6;
    this.maxSpeed = 10;
    this.width = 50;
    this.height = 100;
    this.active = true;

    this.step = function(){
        //Movement
        if (this.active) {
            //Horizontal Movement
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //Slow Down
                this.xspeed *= this.friction; // why does it multiply? //friction coefficient ig i dunno
            } else if (rightKey ){
                //Move Right
                this.xSpeed++;
            } else if (leftKey) {
                this.ySpeed--;
            }
            //Vertical Movement

            //Correct Speed
            this.x += this.xSpeed;
        }
    }

    this.draw = function(){
        ctx.fillStyle= "green";
        ctx.fillRect(this.x, this.y, this.width, this.height); //this.x because it will be changing in the future
    }
}