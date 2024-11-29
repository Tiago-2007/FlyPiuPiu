class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.widht = this.canvas.widht;
        this.height = this.canvas.height;
    }
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.widht = 720;
    canvas.height = 720;

});