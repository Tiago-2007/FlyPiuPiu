class Player {
    constructor(game) {
        this.game = game;
        this.x = 50;
        this.y = 60;
        this.widht = 200;
        this.height = 200;
    }
    
    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.widht, this.height);
    }


    update() {
        this.x++;    
    }
}



