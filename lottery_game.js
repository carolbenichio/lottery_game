// Lottery game

let lotteryLength = 6;
let lotteryNumbers = []; 
let maxNumber = 60; // In this example, the lottery numbers can go from 1 to 60
let game = [6, 18, 10, 57, 28, 39];


// Let the games begin!

// Draw the lottery numbers
for (let index = 0; index < lotteryLength; index +=1) { 
    lotteryNumbers.push(" "+Math.ceil(Math.random() * maxNumber));
}

// Reads your game and shows how much you got it!
let hits = 0; // Shows how many times you hit one number
//let hitNumbers = []; // Shows witch numbers you nailed it

for (let index1 = 0; index1 < 6; index1 +=1) {
    for (let index2 = 0; index2 < 6; index2 +=1) {    
        if (game[index2] === lotteryNumbers[index1]) {
            hits+=1;
            //hitNumbers.push(game[index2]);
        }
    }
}
// Print the final messages
console.log("-----------------------------------------------------------------");
console.log("Os números sorteados são:"+lotteryNumbers+".");
console.log("O seu jogo é: "+game.join(", ")+".");
console.log("Você acertou "+hits+" números!");
console.log("-----------------------------------------------------------------");