// Lottery game

let lotteryLength = 3;
let lotteryNumbers = []; 
let maxNumber = 60; // In this example, the lottery numbers can go from 1 to 60
let game = [6, 18, 10];


// Let the games begin!

// Draw the lottery number
for (let index = 0; index < lotteryLength; index +=1) { 
    lotteryNumbers.push(" "+Math.ceil(Math.random() * maxNumber));
}

// Reads your game and shows how much you got it!
let hits = 0; // Shows how many times you hit one number
let hitNumbers = []; // Shows witch numbers you nailed it

for (let index1 = 0; index1 < 6; index1 +=1) {
    for (let index2 = 0; index2 < 6; index2 +=1) {    
        if (" "+game[index2] == lotteryNumbers[index1]) {
            hits+=1;
            hitNumbers.push(game[index2]);
        }
    }
}
// Print the final messages
console.log("-----------------------------------------------------------------");
console.log("The lottery numbers are:"+lotteryNumbers+".");
console.log("Your numbers are: "+game.join(", ")+".");
console.log("You hit "+hits+" number(s)!");
if (hits !== 0) {
    console.log("Your hit numbers are: "+hitNumbers.join(", ")+"!");
    console.log("Congratulations!")
} else {
    console.log("Try again! :)");
}
console.log("-----------------------------------------------------------------");