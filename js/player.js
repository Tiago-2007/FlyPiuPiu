class Player {
    constructor(game) {
        this.game = game;
        this.x = 20;
        this.y = 0;
        this.spriteWidht = 200;
        this.spriteHeight = 200;
        this.widht;
        this.height;
        this.speedY = 0;
    }
    
    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.widht, this.height);
    }
    
    update() {
        this.y += this.speedY;
        
        if(this.isTouchingBottom())      {
            this.y = this.game.height - this.height; 
        }
        else   { 
            this.speedY += this.game.gravity;
    }
}

    resize() {
        this.widht = this.spriteWidht * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
        this.y = this.game.height * 0,5 - this.height * 0,5
        this.speedY = -8 * this.game.ratio;
    }

    isTouchingBottom() {
        return this.y >= this.game.height - this.height;
    }
}
