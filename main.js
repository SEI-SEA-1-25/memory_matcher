let turnsPlayed = 0
let numOfCardsFlipped = 0
let allCardValues = ['1', '2', '1', '2'] // TODO: shuffle these!
let firstGuess = null
let secondGuess = null
let alreadyMatched = []

const allCards = document.querySelectorAll('.card')
for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click', function(event) {
    const idStr = event.target.id.replace('card-', '')
    const idNum = parseInt(idStr)
    event.target.innerText = allCardValues[idNum]

    if (firstGuess === null) {
      firstGuess = idNum
    } else {
      secondGuess = idNum
    }

    if (secondGuess !== null) {
      turnsPlayed ++

      if (turnsPlayed > 4) {
        const winH1 = document.createElement('h1')
        winH1.innerText = 'You lose :('
        document.querySelector('#win-message').append(winH1)
      }

      if (allCardValues[firstGuess] === allCardValues[secondGuess]) {
        console.log('match!');

        alreadyMatched.push(firstGuess)
        alreadyMatched.push(secondGuess)

        if (alreadyMatched.length === 4) {
          const winH1 = document.createElement('h1')
          winH1.innerText = 'You win!'
          document.querySelector('#win-message').append(winH1)
        }

        firstGuess = null
        secondGuess = null
      } else {
        setTimeout(() => {
          document.querySelector('#card-' + firstGuess).innerText = 'X'
          document.querySelector('#card-' + secondGuess).innerText = 'X'

          firstGuess = null
          secondGuess = null
        }, 2000)
      }
    }
  })
}
