// My role in the group is: Translating Pseudocode into Code

// Here is my part of the challenge:

var total = 0;
for (var i=0; i < number.length; i++){
  total = total + number[i]; 
}

var mean = total/numbers.length

number = number.sort()

if ((number.length/2)%2 === 0) {
	return number[(number.length/2)-1]
} else {
	return number[number.length%2]
}
