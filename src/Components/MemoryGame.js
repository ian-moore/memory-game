import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCard } from '../actions';
import Card from './Card';
import './MemoryGame.css';

class MemoryGame extends Component {
  render() {
    return (
      <div className="MemoryGame">
        <div className="MemoryGame-cardsGrid">
          {this.props.cardKeys.map(key =>{
            const card = this.props.cards[key];
            if (card.matched) {
              return <Card key={key} />;
            } else {
              return (
                <Card 
                  key={key} 
                  cardId={key} 
                  name={card.name}
                  flipped={card.flipped} 
                  onClick={this.props.onCardClick} 
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    cardKeys: Object.keys(state.cards).sort((a, b) => a - b),
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
