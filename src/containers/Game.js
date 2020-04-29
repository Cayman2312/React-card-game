import React, { Component } from 'react';
import './Game.scss';
import { Redirect } from 'react-router-dom';
import Popup from './Popup';
import Cards from '../components/Cards/Cards';

export default class Game extends Component {
  state = {
    cardAmount: 20,
    cards: [],
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
    setTimeout(this.getCards, 100);
  }

  getCards(amount) {
    let arr = new Array(amount / 2)
      .fill('')
      .map((item) => Math.round(Math.random() * 19) + 1);
    let imgArr = arr.concat(arr).sort(() => Math.random() - 0.5);

    const cards = new Array(amount).fill('').map((_, index) => {
      return {
        id: index,
        img: `/images/${imgArr[index]}.jpg`,
        show: false,
        status: false,
      };
    });

    this.setState({ cards });
  }

  componentDidMount() {
    this.getCards(this.state.cardAmount);
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
