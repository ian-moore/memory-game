const shuffle = require('lodash.shuffle');

class Card {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.active = true;
        this.matched = false;
    }

    static create(name, position) {
        return new Card(name, position);
    }
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
    'Victoria',
    'Saladin',
    'Isabella',
    'Arpad',
];

const getInitialData = () => {
    const dataPairs = data.map(x => [ x, x ])
        .reduce((data, x) => data.concat(x), []);
    return shuffle(dataPairs).map(Card.create)
        .reduce((obj, x) => Object.assign(obj, { [x.position]: x }), {});
};

export { getInitialData };