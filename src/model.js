const shuffle = require('lodash.shuffle');

class CardModel {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.flipped = false;
        this.matched = false;
    }

    static create(name, position) {
        return new CardModel(name, position);
    }

    static isMatch(card1, card2) {
        return card1.name === card2.name;
    }
}

const GameState = {
    CHOOSING_CARD: 'CHOOSING_CARD',
    AWAITING_MATCH: 'AWAITING_MATCH',
    COMPLETE: 'COMPLETE',
}

const data = [
    'Napoleon',
    'Charlemagne',
    'Mehmed',
    'Octavian',
    'William',
    'Alexander',
    'Cyrus',
    'Barbarossa',
    'Roger',
    'Saladin',
    'Isabella',
    'Arpad',
];

const getInitialData = () => {
    const dataPairs = data.map(x => [ x, x ])
        .reduce((data, x) => data.concat(x), []);
    return shuffle(dataPairs).map(CardModel.create)
        .reduce((obj, x) => Object.assign(obj, { [x.position]: x }), {});
};

export { 
    CardModel,
    getInitialData,
    GameState
};