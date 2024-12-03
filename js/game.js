class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.widht = this.canvas.widht;
        this.height = this.canvas.height;
    }

    render() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(100, 100, 50, 150);
    }
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.widht = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx);
    game.render();
})
