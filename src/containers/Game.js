import React, { Component } from 'react';
import './Game.scss';
import { Redirect } from 'react-router-dom';
import Popup from './Popup';
import Cards from '../components/Cards/Cards';

export default class Game extends Component {
  state = {
    cardAmount: 4,
    cards: [
      {
        id: 1,
        img: '/images/1.jpg',
        show: false,
        status: false,
      },
      {
        id: 2,
        img: '/images/2.jpg',
        show: false,
        status: false,
      },
      {
        id: 3,
        img: '/images/1.jpg',
        show: false,
        status: false,
      },
      {
        id: 4,
        img: '/images/2.jpg',
        show: false,
        status: false,
      },
    ],
    activeCard: null,
    avalibleCompare: true,
  };

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
      // console.log('activeCard ', activeCard);
      // console.log('currentCard :>> ', currentCard);

      if (
        activeCard.id !== currentCard.id &&
        activeCard.img === currentCard.img
      ) {
        setTimeout(() => {
          cards.find((card) => card.id === currentCard.id).status = true;
          cards.find((card) => card.id === activeCard.id).status = true;
          this.setState({ cards, activeCard: null });
        }, 300);
      } else {
        this.setState({ avalibleCompare: false });
        setTimeout(() => {
          cards.find((card) => card.id === currentCard.id).show = false;
          cards.find((card) => card.id === activeCard.id).show = false;
          this.setState({ cards, activeCard: null, avalibleCompare: true });
        }, 600);
      }
    }, 0);
  }

  setCardAmount(number) {
    this.setState({ cardAmount: number });
    setTimeout(this.getCards, 100);
  }

  getCards() {}

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
