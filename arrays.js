// Day 1 Blue Badge

// For Loop Challenge
// let foods = ["apple", "orange", "rice", "bread", "tofu"];
// for (let i = foods.length - 1; i > -1; i--){
//     if (i % 2 === 1){
//         let word = foods[i];
//         let titleCasedWord = titleCase(word);
//         console.log(`Foods[${i}]: ${titleCasedWord}`);
//     }
// }

// function titleCase(word){
//     let firstLetter = word[0].toUpperCase();
//     let restLetters = word.slice(1);

//     return firstLetter + restLetters;
// }

// For..of Loop Challenge
// let foods = ["apple", "orange", "rice", "bread", "tofu"];

// let allergies = ["gluten", "soy"];

// for (let food of foods){
//     // Assigns a string based on the function returning true/false
//     let longWordResult = checkLength(food) ? "" : "not "

//     // Formatting the output
//     let response = `${food} is ${longWordResult}a long word, and ${checkAllergies(food).toLocaleLowerCase()} it with your allergies.`

//     console.group(response);
// }

// function checkLength(food){
//     return food.length > 4;
// }

// function checkAllergies(food){
//     // Translates food to their underlying allergy
//     allergyMap = {
//         bread : "gluten",
//         tofu : "soy"
//     }

//     // Checks to see if food is in the allergyMap
//     let allergyLookup = allergyMap[food];

//     // If it is and is one of their allergies
//     if (allergies.includes(allergyLookup)){
//         return "You can't eat";
//     } else {
//         return "You can eat";
//     }
// }

// Array Push Challenge
// let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"];
// let faceCards = [];
// let numberedCards = [];

// while (cards.length > 0) {
//     let card = cards.pop();
//     if (isFaceCard(card)){
//         faceCards.push(card);
//     } else {
//         numberedCards.push(card);
//     }
// }
// console.log(cards);
// console.log(faceCards);
// console.log(numberedCards);

// function isFaceCard(card){
//     switch(card){
//         case "A":
//         case "K":
//         case "Q":
//         case "J":
//             return true;
//         default:
//             return false;
//     }
// }

// ForEach Challenge
let animals = [
    'bat', 'tiger', 'yak',
    'monkey', 'snake', 'lizard',
    'panda', 'monkey', 'hyena'
]

let zooTrip = {
    seen: [],
    animalsSeen: 0
}

animals.forEach((animal) => {
    console.log(`${animal} was seen today at the zoo!`);
    // Order dependent code, This checks before the new animal add, if unique adds ++ to animalsSeen
    if (!zooTrip.seen.includes(animal)) {
        zooTrip.animalsSeen++
    }
    //Adds to seen array
    seenAtTheZoo(animal);
}) 

console.log(zooTrip)

function seenAtTheZoo(animal){
    zooTrip.seen.push(animal);
}