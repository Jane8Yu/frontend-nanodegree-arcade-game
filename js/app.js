// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    	this.sprite = 'images/enemy-bug.png';
	this.x = x || 0;
	this.y = y || 0;
	this.speed = speed || 10;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x += this.speed * dt;
	if(this.x >= 505){
		this.x = 0;
	}
	if(player){
		if(Math.abs(player.x - this.x) <= 40 && Math.abs(player.y - this.y) <= 40){
			player = new Player(400,400, 29.2);
		}
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,speed){
	this.sprite = 'images/char-boy.png';
	this.x = x || 0;
	this.y = y || 0;
	this.speed = speed || 10;
}

Player.prototype.update = function() {
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(value){
	if(value == 'left')
		this.x = this.x - 100;
	if(value == 'right')
		this.x += 100;
	if(value == 'up')
		this.y -= 100;
	if(value == 'down')
		this.y += 100;
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(400,400, 29.2);
var enemy1 = new Enemy(0, 60, 120);
var enemy2 = new Enemy(0, 150, 210);
var enemy3 = new Enemy(0, 230, 171);
var allEnemies = [enemy1, enemy2, enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
