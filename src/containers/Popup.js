import React, { Component } from 'react'
import './Popup.scss'
import { Range, getTrackBackground } from 'react-range'
import { Redirect } from 'react-router-dom'

export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: [20],
      difficulty: [2],
      isRepeat: [1],
      redirect: false,
    }
  }

  onSubmit(e, number, difficulty, isRepeat) {
    e.preventDefault()
    this.props.setProperties({ number, difficulty, isRepeat })
  }

  render() {
    return (
      <div
        className="Popup"
        onClick={(e) => {
          if (e.target.className === 'Popup') {
            this.setState({ redirect: true })
          }
        }}
      >
        {this.state.redirect ? <Redirect to="/" /> : null}
        <div className="Popup__window">
          <h3 className="Popup__title">Выберите параметры игры:</h3>
          <form
            action=""
            onSubmit={(e) => {
              this.onSubmit(
                e,
                this.state.values[0],
                this.state.difficulty[0],
                this.state.isRepeat[0]
              )
            }}
          >
            <Range
              values={this.state.values}
              step={2}
              min={2}
              max={40}
              onChange={(values) => this.setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  className="pointer"
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
                        min: 2,
                        max: 40,
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
            <output className="Popup__output" id="cardsAmount">
              Количество карточек:{' '}
              <span style={{ fontWeight: 'bold' }}>{this.state.values[0]}</span>
            </output>
            <br />
            <Range
              values={this.state.difficulty}
              step={1}
              min={1}
              max={3}
              onChange={(difficulty) => this.setState({ difficulty })}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  className="pointer"
                  style={{
                    ...props.style,
                    height: '36px',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '30%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values: this.state.difficulty,
                        colors: ['#548BF4', '#ccc'],
                        min: 1,
                        max: 3,
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
                    height: '40px',
                    width: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#FFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 2px 6px #AAA',
                    outline: 'none',
                  }}
                >
                  <div
                    style={{
                      height: '15px',
                      width: '15px',
                      borderRadius: '50%',
                      backgroundColor: isDragged ? '#548BF4' : '#CCC',
                    }}
                  />
                </div>
              )}
            />
            <output className="Popup__output" id="cardsAmount">
              Сложность:{' '}
              {this.state.difficulty[0] === 1 ? (
                <b>низкая {'😃'}</b>
              ) : this.state.difficulty[0] === 2 ? (
                <b>умеренная {'🙂'}</b>
              ) : (
                <b>высокая {'😤'}</b>
              )}
            </output>
            <br />
            <Range
              values={this.state.isRepeat}
              step={1}
              min={0}
              max={1}
              onChange={(isRepeat) => this.setState({ isRepeat })}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  className="pointer"
                  style={{
                    ...props.style,
                    height: '36px',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '10%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values: this.state.isRepeat,
                        colors: ['#548BF4', '#ccc'],
                        min: 0,
                        max: 1,
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
                    height: '40px',
                    width: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#FFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 2px 6px #AAA',
                    outline: 'none',
                  }}
                >
                  <div
                    style={{
                      height: '15px',
                      width: '15px',
                      borderRadius: '50%',
                      backgroundColor: isDragged ? '#548BF4' : '#CCC',
                    }}
                  />
                </div>
              )}
            />
            <output className="Popup__output" id="cardsAmount">
              Картинки
              {this.state.isRepeat[0] === 0 ? (
                <>
                  <span style={{ fontWeight: 'bold' }}> могут </span>
                  повторяться
                </>
              ) : (
                <>
                  <span style={{ fontWeight: 'bold' }}> НЕ </span>
                  повторяются
                </>
              )}
            </output>
            <br />
            <input type="submit" className="Popup__submit" value="Старт!" />
          </form>
        </div>
      </div>
    )
  }
}
