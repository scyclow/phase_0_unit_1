// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Steve Pikelny
//  2. Clayton Jordan


function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
        console.log("My client, " + this.name + " is " + this.age + '-years-old. Most known for the quote: "' + this.quote + '"')
    }
}

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")

var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new Client ("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

console.log("My client, " + adamSandler.name + " is " + adamSandler.age + "-years-old. He's known for the quote: " +'"'+adamSandler.quote+'"')
console.log("My client, " + kristenBell.name + " is " + kristenBell.age + "-years-old. She's known for the quote: " +'"'+kristenBell.quote+'"')
console.log("My client, " + jimCarrey.name + " is " + jimCarrey.age + "-years-old. He's known for the quote: " +'"'+jimCarrey.quote+'"')

adamSandler.showQuote()


//  6.  Your Reflection:
// Some of this stuff was relatively straightforwards. I think we had the most trouble trying to figure out what, exactly, the directions were asking of us.
// Aside from that, we had to google some of the syntax for writing object-oriented JavaScript. 
//I don't think that defining variables and objects is very intuative. At least, it's not as intuatuve as it is in Ruby or Python.
//
