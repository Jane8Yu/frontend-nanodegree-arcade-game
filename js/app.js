// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.initLoc = 0;
    this.speed = 10;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    //todo: Updates the Enemy location (you need to implement)

    //todo: Handles collision with the Player (you need to implement)
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
	this.sprite = 'images/char-cat-girl';
	this.iniLoc = 0;
}

Player.prototype.update = function(){


}

Player.prototype.render = function(){}

Player.prototype.handleInput = function(allowedKeys){
	//todo: Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
	//todo: Recall that the player cannot move off screen (so you will need to check for that and handle appropriately)

	//dodod: If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player;


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
