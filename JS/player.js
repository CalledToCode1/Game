function Player(x, y){ //a constructor (i think)
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.friction = 0.6;
    this.maxSpeed = 1; //change as needed
    this.width = 50;
    this.height = 50;
    this.active = true;

    this.step = function(){
        //Movement
        if (this.active) {
            //Horizontal Movement
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //Slow Down
                this.xSpeed *= this.friction; // why does it multiply? //friction coefficient ig i dunno
            } else if (rightKey ){
                //Move Right
                this.xSpeed++;
            } else if (leftKey) {
                this.xSpeed--;
            }
            //Vertical Movement
            if (!upKey && !downKey || upKey && downKey) {
                //Slow Down
                this.ySpeed *= this.friction; // why does it multiply? //friction coefficient ig i dunno
            } else if (upKey ){
                //Move Right
                this.ySpeed--; //flipped for some reason
            } else if (downKey) {
                this.ySpeed++;
            }
            //Correct Speed
            if (this.xSpeed > this.maxSpeed) {

                this.xSpeed = this.maxSpeed;

            } else if (this.xSpeed < this.maxSpeed) {

                this.xSpeed = this.maxSpeed;
                
            }

            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }
    }

    this.draw = function(){
        ctx.fillStyle= "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height); //this.x because it will be changing in the future
    }
}