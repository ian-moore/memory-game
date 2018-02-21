import { CardModel, GameState } from './model';
import { updateApp } from './reducer';
import { checkForMatch, selectCard } from './actions';

describe('reducer handles selectCard action', () => {
    const state = {
        cards: {
            '0': new CardModel('Historical Figure 1', 0),
            '1': new CardModel('Historical Figure 2', 1),
        },
        firstCardId: null,
        secondCardId: null,
        gameState: GameState.CHOOSING_CARD,
        matches: 0,
        turns: 0,
    };

    const keyToTest = '1';
    const newState = updateApp(state, selectCard(keyToTest, GameState.CHOOSING_CARD));

    test('updates selected card to flipped', () => {
        expect(newState.cards[keyToTest].flipped).toBe(true);
    });
    test('updates firstCardId to the card id', () => {
        expect(newState.firstCardId).toBe(keyToTest);
    });
});

it('updates second selected card to flipped', () => {
    const state = {
        cards: {
            '0': {
                name: 'Historical Figure 1',
                position: 0,
                flipped: true,
                matched: false,
            },
            '1': new CardModel('Historical Figure 2', 1),
        },
        firstCardId: '0',
        secondCardId: null,
        gameState: GameState.CHOOSING_CARD,
        matches: 0,
        turns: 0,
    };

    const keyToTest = '1';
    const newState = updateApp(state, selectCard(keyToTest, GameState.CHOOSING_CARD));

    test('updates selected card to flipped', () => {
        expect(newState.cards[keyToTest].flipped).toBe(true);
    });
    test('firstCardId is not changed', () => {
        expect(newState.firstCardId).toBe(state.firstCardId);
    });
    test('updates secondCardId to the card id', () => {
        expect(newState.secondCardId).toBe(keyToTest);
    });
});

describe('reducer handles successful checkForMatch action', () => {
    const state = {
        cards: {
            '0': {
                name: 'Historical Figure',
                position: 0,
                flipped: true,
                matched: false,
            },
            '1': {
                name: 'Historical Figure',
                position: 1,
                flipped: true,
                matched: false,
            },
        },
        firstCardId: '1',
        secondCardId: '0',
        gameState: GameState.AWAITING_MATCH,
        matches: 0,
        turns: 0,
    };

    const newState = updateApp(state, checkForMatch());

    test('updated first card', () => {
        expect(newState.cards[state.firstCardId].matched).toBe(true);
    });
    test('updated second card', () => {
        expect(newState.cards[state.secondCardId].matched).toBe(true);
    });
    test('reset firstCardId', () => {
        expect(newState.firstCardId).toBe(null);
    });
    test('reset secondCardId', () => {
        expect(newState.secondCardId).toBe(null);
    });
    test('updated the number of turns taken', () => {
        expect(newState.turns).toBe(1);
    });
    test('updated number of matches', () => {
        expect(newState.matches).toBe(1);
    });
});