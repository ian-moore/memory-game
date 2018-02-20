import React, { Component } from 'react';
import './Card.css';
import classNames from 'classnames';

class Card extends Component {
    onClick = () => {
        if (this.props.isClickable) {
            this.props.onClick(this.props.cardId);
        }
    }
    render() {
        return (
            <div 
                className={classNames(
                    "Card", { 
                        "Card-clickable": this.props.isClickable,
                        "Card-flipped": this.props.flipped,
                    },
                )}
                onClick={this.onClick}>
                <div className="Card-container">
                    <div className="Card-side Card-back" />
                    <div className="Card-side Card-face">
                        <img src={this.props.image} alt={this.props.name} />
                        <div className="Card-title">
                            {this.props.name}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;