import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="Card-container">
                    <div className="Card-side Card-back" />
                    <div className="Card-side Card-face">
                        {'this.props.card.name'}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;