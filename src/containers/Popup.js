import React, { Component } from 'react';
import './Popup.scss';
import { Range, getTrackBackground } from 'react-range';

const STEP = 2;
const MIN = 2;
const MAX = 40;

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [20],
    };
  }

  onSubmit(e, number) {
    e.preventDefault();

    this.props.setCardAmount(number);
  }

  render() {
    return (
      <div className="Popup">
        <div className="Popup__window">
          <h3 className="Popup__title">
            Выберите желаемое количество карточек:
          </h3>
          <form
            action=""
            onSubmit={(e) => {
              this.onSubmit(e, this.state.values[0]);
            }}
          >
            <Range
              values={this.state.values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => this.setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: '36px',
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values: this.state.values,
                        colors: ['#548BF4', '#ccc'],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: 'center',
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '42px',
                    width: '42px',
                    borderRadius: '4px',
                    backgroundColor: '#FFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 2px 6px #AAA',
                  }}
                >
                  <div
                    style={{
                      height: '16px',
                      width: '5px',
                      backgroundColor: isDragged ? '#548BF4' : '#CCC',
                    }}
                  />
                </div>
              )}
            />
            <output
              style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '2em' }}
              id="output"
            >
              {this.state.values[0]}
            </output>
            <br />
            <input type="submit" className="Popup__submit" value="Старт!" />
          </form>
        </div>
      </div>
    );
  }
}
