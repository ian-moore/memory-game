import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCard } from '../actions';
import Card from './Card';
import { GameState } from '../model';
import './MemoryGame.css';

const portraitPath = require.context('../Images', true);

class MemoryGame extends Component {
    renderCardsGrid = () => {
        return (
            <div className="MemoryGame-cardsGrid">
                {this.props.cardKeys.map(key => {
                    const card = this.props.cards[key];
                    const gameState = this.props.gameState;
                    if (card.matched) {
                        return <div key={key} className="MemoryGame-emptyCard" />;
                    } else {
                        return (
                            <Card
                                key={key}
                                cardId={key}
                                name={card.name}
                                image={portraitPath(`./${card.name}.png`)}
                                isClickable={gameState === GameState.CHOOSING_CARD && !card.flipped}
                                flipped={card.flipped}
                                onClick={this.props.onCardClick}
                            />
                        );
                    }
                })}
            </div>
        );
    }
    renderGameCompleted = () => {
        return (
            <div className="MemoryGame-winMessage">
                You matched {this.props.matches} European conquerors in {this.props.turns} turns!
            </div>
        );
    }
    render() {
        return (
            <div className="MemoryGame">
                {this.props.gameState === GameState.COMPLETE
                    ? this.renderGameCompleted()
                    : this.renderCardsGrid()
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        cardKeys: Object.keys(state.cards).sort((a, b) => a - b),
        gameState: state.gameState,
        matches: state.matches,
        turns: state.turns,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCardClick: cardId => {
            dispatch(selectCard(cardId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame);
