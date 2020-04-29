import React, { Component } from 'react';
import './Popup.scss';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      isInputValid: false,
      cardNumber: null,
    };
  }

  componentDidMount() {
    this.ref.current.focus();
  }

  validate(value) {
    let isInputValid = true;
    value = value.trim();
    if (isNaN(value - 1) || value <= 0 || value % 2 !== 0 || value > 40) {
      isInputValid = false;
    }

    this.setState({ isInputValid: isInputValid, cardNumber: value });
  }

  onSubmit(e, number) {
    e.preventDefault();
    if (!this.state.isInputValid) {
      return;
    }
    this.props.setCardAmount(number);
  }

  render() {
    return (
      <div className="Popup">
        <div className="Popup__window">
          <h3 className="Popup__title">
            Введите желаемое количество карточек:
          </h3>
          <form
            action=""
            onSubmit={(e) => {
              this.onSubmit(e, this.state.cardNumber);
            }}
          >
            <input
              ref={this.ref}
              type="text"
              className="Popup__input"
              id="input"
              onChange={(e) => {
                this.validate(e.target.value);
              }}
            />
            <input type="submit" className="Popup__submit" value="Старт!" />
          </form>
          <p
            className={`Popup__validation ${this.state.isInputValid.toString()}`}
          >
            *введите четное целое число не больше 40
          </p>
        </div>
      </div>
    );
  }
}
