// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 // rescue-mission
	 // move down x2
	 //move right
	 //move up x2
	 //move right x2
	 //move down x2
	 //attack

this.moveDown();
this.moveDown();
this.moveRight();

this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();

//grab the mushroom
	//move up
	//move right -- grabbed the mushroom
	//move left
	//move up
	//attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

//drink me
	//move right
 	//attack
 	//mover right
 	//move down -- get potion
 	//move up
 	//move right
 	//attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

 //taunt the guards
 	//move rights
 	//bust door down

 	//move right
 	//get ogre's attention
 	//move left x2
 	//get phobe to attack ogre

 	//move right
 	//"follow me"
 	//move right x3
 	//move up
 	//move right

 	//shout at other ogres to get their attention
 	//move down
 	//move right
 	//move up
 	//move right

this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveRight();
this.moveUp();

this.moveRight();
this.say("fuckoff");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 

//it's a trap
	//move down x2
	//shout at ogre
	//move up x2
this.moveDown();
this.moveDown();
this.say("f");
this.moveUp();
this.moveUp();
 
//taunt
	//swear at the ogre x4
this.say("hey!")
this.say("hey asshole");
this.say("you suck");
this.say("come over here");

//cowardly taunt
	//move to safe spot
	//move out into the open, but with some extra distance
	//scream at ogres
	//retreat to safe spot
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");
 
this.moveXY(55,30);
this.say("hey fucker");
this.moveXY(70,10);
 
//commanding followers
	//say "follow me"
	//move to 66 48
	//say attack
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

this.say("follow me!");
this.moveXY(66, 48);
this.say("attack!");

//mobile artillery
	//move within range of the first group of ogre
	//fire cannonball
	//move within range of second group of ogre
	//fire initial shot
	//fire closer shot, as large ogre walks into blast. 	
	//move within range of third group of ogre
	//fire initial shot
	//fire closer shot, as large ogre walks into blast. 

this.moveXY(30, 26);  
this.attackXY(46, 5);  
this.moveXY(50,35);
this.attackXY(70,55);
this.attackXY(60,46);
this.attackXY(49,63);
this.attackXY(48,51);
 
// Reflection:

//"this" referred to the object named "this". all methods were being performed on the "this" object. 
//parenthases surround the method's parameters.
//semicolons designate a new line
//in all, this was moderately fun. I like that the character said what I wrote, but bleeped out cuss words.
//I see the benefit of pseduocoding before actually writing the code down. It allowed me to think about the problem without worrying about implimentation.
//



// Write your reflection here.