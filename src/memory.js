class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let randomNb = 0;
    const randomCardsArray = [];

    for (let i = this.cards.length; i > 0; i--) {
      randomNb = Math.floor(Math.random() * this.cards.length);
      randomCardsArray.push(this.cards[randomNb]);
      this.cards.splice(randomNb, 1);
    }
    this.cards = randomCardsArray;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) return true;
    else return false;
  }
}
