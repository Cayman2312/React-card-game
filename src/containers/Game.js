import React, { Component } from 'react';
import './Game.scss';
import { Redirect } from 'react-router-dom';
import Popup from './Popup';
import Cards from '../components/Cards/Cards';

let condition = true;

export default class Game extends Component {
  state = {
    cardAmount: null,
    cards: [],
    activeCard: null,
    avalibleCompare: true,
  };

  checkWin() {
    const cards = this.state.cards;
    if (cards.every((card) => card.status)) {
      this.props.winGame();
    }
  }

  restartGame() {
    this.setState({ cardAmount: null, cards: [] });
    setTimeout(() => {
      condition = true;
    }, 100);
  }

  compareCards(cardId) {
    if (!this.state.avalibleCompare) {
      return;
    }
    const cards = [...this.state.cards];
    let currentCard = cards.find((card) => card.id === +cardId);
    currentCard.show = !currentCard.show;
    let activeCard = this.state.activeCard;

    if (!this.state.activeCard) {
      activeCard = { ...currentCard };
    } else if (activeCard.id === currentCard.id) {
      activeCard = null;
    }

    this.setState({ cards, activeCard });

    setTimeout(() => {
      if (
        !this.state.activeCard ||
        this.state.activeCard.id === currentCard.id
      ) {
        return;
      }

      let activeCard = this.state.activeCard;
      let cards = [...this.state.cards];

      if (
        activeCard.id !== currentCard.id &&
        activeCard.img === currentCard.img
      ) {
        setTimeout(() => {
          cards.find((card) => card.id === currentCard.id).status = true;
          cards.find((card) => card.id === activeCard.id).status = true;
          this.setState({ cards, activeCard: null });
          this.checkWin();
        }, 300);
      } else {
        this.setState({ avalibleCompare: false });
        setTimeout(() => {
          cards.find((card) => card.id === currentCard.id).show = false;
          cards.find((card) => card.id === activeCard.id).show = false;
          this.setState({
            cards,
            activeCard: null,
            avalibleCompare: true,
          });
        }, 600);
      }
    }, 0);
  }

  setCardAmount(number) {
    this.setState({ cardAmount: number });
    this.props.setTimeLeft(number);
    setTimeout(() => {
      this.getCards(this.state.cardAmount);
    }, 100);
  }

  getCards(amount) {
    let arr = new Array(+amount / 2)
      .fill('')
      .map((item) => Math.round(Math.random() * 19) + 1);
    let imgArr = arr.concat(arr).sort(() => Math.random() - 0.5);

    const cards = new Array(+amount).fill('').map((_, index) => {
      return {
        id: index,
        img: `/images/${imgArr[index]}.jpg`,
        show: false,
        status: false,
      };
    });

    this.showCards(cards);
  }

  showCards(arr) {
    if (arr.length === 0) {
      return;
    } else {
      let cardsNew = this.state.cards;
      cardsNew.push(arr.pop());
      setTimeout(() => {
        this.setState({ cards: cardsNew });
        this.showCards(arr);
      }, 30);
    }
  }

  componentDidMount() {
    this.getCards(this.state.cardAmount);
  }

  componentDidUpdate() {
    if (this.props.gameStatus === 'restart' && condition) {
      condition = false;
      this.restartGame();
    }
  }

  render() {
    return (
      <>
        {!this.props.isStarted ? <Redirect to="/" /> : null}
        {!this.state.cardAmount ? (
          <Popup setCardAmount={(number) => this.setCardAmount(number)} />
        ) : (
          <Cards
            cards={this.state.cards}
            onClick={(card) => this.compareCards(card)}
          />
        )}
      </>
    );
  }
}
