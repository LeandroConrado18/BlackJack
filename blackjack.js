function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
} // Yes i understand
let sumOfCards = 0
let cards = [getRandomInt(1,11), getRandomInt(1,11)]
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let gameStarted = false


function sumCards(listOfcards){
    let sum = 0
    for(let i=0; i < listOfcards.length; i++){
        
        sum += listOfcards[i]

    }
    sumOfCards = sum
    sum = 0
}

function start(){
    gameStarted = true
    cardEl.textContent = "Your cards are" + " " +  cards
    sumCards(cards)
    sumEl.textContent = "Your sum is" + " " +  sumOfCards
        if (sumOfCards <= 20){
            messageEl.textContent = "You want a new card?"
        }
        else if (sumOfCards==21){
            messageEl.textContent = "BLACKJACK"
        }
        else {
            messageEl.textContent = "Sorry, you lose"
        }
    }

function newCard(){
    if (gameStarted==true){
    cards.push(getRandomInt(1,11))
    start()
    }
}
function newGame(){
    if (gameStarted==true){
    cards = [getRandomInt(1,11), getRandomInt(1,11)]
    sumOfCards = 0
    messageEl.textContent = "You want a new card?"
    cardEl.textContent = "Your cards are" + " " +  cards
    sumCards(cards)
    sumEl.textContent = "Your sum is" + " " +  sumOfCards
    }
}



