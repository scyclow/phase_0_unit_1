// This is a solo challenge

// Your mission description:
// You walk into a pitch-black 100m by 100m dungeon, and the door slams behind you. 
//You hear an occasional growl echo off the walls, indicating that there are enemies nearby.
//		Get the hell out of there as fast as you can! 
//		
// Tip: The map said that there are more trap-doors the closer you get to the walls, so don't just stick to the edges.
// Tip: The exit is somewhere in the upper right-hand corner. 
// 

// Pseudocode
// Board is 100x100 meters 
// Entrance is at 0,0  --- exit is somwhere between (100,95) and (100,100)
//
// Player should have the following attributes:
// 		name
// 		health
//		dead/alive
// 		position
// and the following methods:
// 		moveXY <___move a combined 10 meters along the x and y axis.
//			if they encounter an enemy along the way, the enemy should attack them.
//		
// 
// Enemies should have:
// 		position
// and they should be able to:
// 		attack
//
//
//


// Initial Code

var exit = {
    x: 100,
	y: (100-Math.floor(Math.random()*6))
};

function Enemy(health, posX, posY) {
	this.position = {
		x: posX,
		y: posY
	};
	this.attack = function (target) {
		var loss = Math.floor(Math.random()*11);
		target.health -= loss;
		console.log(target.name+" was attacked by an enemy!");
		console.log(target.name+" lost "+loss+" health!");

		if (target.health <= 0) {
			target.alive = false;
			console.log(target+" is dead!");
		}
	};
}

//populates 2000 enemies in random locations
var enemies = [];
for (var i=0; i < 2001; i++) {
	enemies[i] = new Enemy(
		10,
		Math.floor(Math.random()*101),	//picks random coordinares for each enemy.
		Math.floor(Math.random()*101)
		);
}

function Player(name, health, posX, posY) {
	this.alive = true;
	this.name = name;
	this.health = health;
	this.position = {
		x: posX,
		y: posY
	};

	//determines path of walk
	this.moveXY = function(moveX, moveY) {
		if (!this.alive) {
			console.log("You can't move--you're dead!");
			return;
		}
		if (Math.abs(moveX)+Math.abs(moveY)>10 ) {
			console.log("You can't walk that far. Walk less than 10 meters.");
			return;
		}
		while (moveX !==0 && moveY !==0) {		//for all movements left
			if (moveX === 0) {					//if Y distance left, but no X distance left
				if (moveY>0) {this.position.y -= 1; moveY -=1} 
				else {this.position.y+=1; moveY +=1} //move one meter in Y, take one off distance
			} else if (moveY === 0) {			//if X distance left, but no Y distance left
				if (moveX>0) {this.position.x -= 1; moveX -=1} 
				else {this.position.x+=1; moveX +=1}
			} else {							//if X or Y distance left...
				var XorY = Math.random();
				if (XorY>0.5) {
					if (moveY>0) {this.position.y -= 1; moveY -=1} 
					else {this.position.y+=1; moveY +=1}
				} else {
					if (moveX>0) {this.position.x -= 1; moveX -=1} 
					else {this.position.x+=1; moveX +=1}
				}
			}
            //makes sure player can't go beyond dungeon
            if (this.position.x>100) {this.position.x = 100; console.log("You hit a wall!")}
            if (this.position.x<0) {this.position.x=0; console.log("You hit a wall!")}
            if (this.position.y>100) {this.position.y=100; console.log("You hit a wall!")}
            if (this.position.y<0) {this.position.y=0; console.log("You hit a wall!")}
            
            //if player hits enemy, player is attacked, turn stops
            for (i in enemies) {
				if (enemies[i].position.x === this.position.x 
					&& enemies[i].position.y === this.position.y) {
					enemies.attack(this) ;
					return;
				}
			}
			//if player reaches exit, player wins.
			if (this.position.x === exit.x &&
				this.position.y === exit.y) {
				console.log("Woohoo! You escaped the dungeon! Good Job!");
				return;
            }
		}
	};
}

var steve = new Player("Steve", 20,1,1);







// Refactored Code

var exit = {
    x: 100,
	y: (100-Math.floor(Math.random()*6))
};

function Enemy(health, posX, posY) {
	this.position = {
		x: posX,
		y: posY
	};
	this.attack = function (target) {
		var loss = Math.floor(Math.random()*11);
		target.health -= loss;
		console.log(target.name+" was attacked by an enemy!");
		console.log(target.name+" lost "+loss+" health!");

		if (target.health <= 0) {
			target.alive = false;
			console.log(target+" is dead!");
		}
	};
}

//populates 200 enemies in random locations
var enemies = [];
for (var i=0; i < 201; i++) {
	enemies[i] = new Enemy(
		10,
		Math.floor(Math.random()*101),	//picks random coordinares for each enemy.
		Math.floor(Math.random()*101)
		);
}

function Player(name, health, posX, posY) {
	this.alive = true;
	this.name = name;
	this.health = health;
	this.position = {
		x: posX,
		y: posY
	};

	//determines path of walk
	this.moveXY = function(moveX, moveY) {
		if (!this.alive) {
			console.log("You can't move--you're dead!");
			return;
		}
		if (Math.abs(moveX)+Math.abs(moveY)>10 ) {
			console.log("You can't walk that far. Walk less than 10 meters.");
			return;
		}
		while (moveX !==0 || moveY !==0) {		//for all movements left
			if (moveX === 0) {					//if Y distance left, but no X distance left
				if (moveY>0) {
                    this.position.y += 1; 
                    moveY -=1;
                } else {
                    this.position.y-=1; 
                    moveY +=1;
                } //move one meter in Y, take one off distance
			} else if (moveY === 0) {			//if X distance left, but no Y distance left
				if (moveX>0) {
                    this.position.x += 1;
                    moveX -=1;
                } else {
                    this.position.x-=1; 
                    moveX +=1;
                }
			} else {							//if X or Y distance left...
				var XorY = Math.random();
				if (XorY>0.5) {
					if (moveY>0) {
                        this.position.y += 1; 
                        moveY -=1;
                    } else {
                        this.position.y-=1; 
                        moveY +=1;
                    }
				} else {
					if (moveX>0) {
                        this.position.x += 1; 
                        moveX -=1;
                    } else {
                        this.position.x-=1; 
                        moveX +=1;
                    }
				}
			}
            //makes sure player can't go beyond dungeon
            if (this.position.x>100) {
                this.position.x = 100; 
                console.log("You hit a wall!");
            }
            if (this.position.x<0) {
                this.position.x=0; 
                console.log("You hit a wall!");
            }
            if (this.position.y>100) {
                this.position.y=100; 
                console.log("You hit a wall!");
            }
            if (this.position.y<0) {
                this.position.y=0; 
                console.log("You hit a wall!");    
            }
            
            //if player hits enemy, player is attacked, turn stops
            for (i in enemies) {
                if (this.position.x === enemies[i].position.x && this.position.y === enemies[i].position.y) {
                    enemies[i].attack(this);
                    return;
                }
			}
			//if player reaches exit, player wins.
			if (this.position.x === exit.x &&
				this.position.y === exit.y) {
				console.log("Woohoo! You escaped the dungeon! Good Job!");
				return;
            }
		}
    console.log(this.name+" moved to ("+this.position.x+", "+this.position.y+")");
	};
}

var steve = new Player("Steve", 20,1,1);





// Reflection
// 
// I don't think I did very well on this. I spent way too much time doing the initial code, and complicated matters beyond teh pseudocode as I went along. 
// I also refactored as I went, so there wasn't much to refactor later on.
// In any case, the code works. It's a pretty crappy game right now, but I suppose I could build on it.

//I only ran into minor bugs for most of the script. But, I ran into a couple major bugs with Player.moveXY.

// 
// 
// 
// 
// 
// 