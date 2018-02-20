import { getInitialData, CardModel, GameState } from './model';
import { ActionTypes } from './actions';

const initialState = {
    cards: getInitialData(),
    firstCardId: null,
    secondCardId: null,
    gameState: GameState.CHOOSING_CARD,
    matches: 0,
    turns: 0,
};

const updateGameState = state => {
    if (state.matches === Object.keys(state.cards).length / 2) {
        return GameState.COMPLETE;
    } else {
        return GameState.CHOOSING_CARD;
    }
}

const updateApp = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ActionTypes.SELECT_CARD:
            newState = {
                ...state,
                gameState: action.gameState,
                cards: {
                    ...state.cards,
                    [action.cardId]: {
                        ...state.cards[action.cardId],
                        flipped: true,
                    }
                },
                firstCardId: state.firstCardId ? state.firstCardId : action.cardId,
                secondCardId: state.firstCardId ? action.cardId : null,
            };
            break;

        case ActionTypes.CHECK_MATCH:
            if (!state.firstCardId || !state.secondCardId) {
                newState = state;
                break;
            }

            const firstCard = state.cards[state.firstCardId];
            const secondCard = state.cards[state.secondCardId];

            if (CardModel.isMatch(firstCard, secondCard)) {
                newState = {
                    ...state,
                    firstCardId: null,
                    secondCardId: null,
                    matches: state.matches + 1,
                    turns: state.matches + 1,
                    cards: {
                        ...state.cards,
                        [state.firstCardId]: {
                            ...firstCard,
                            matched: true,
                        },
                        [state.secondCardId]: {
                            ...secondCard,
                            matched: true,
                        }
                    }
                };
                newState.gameState = updateGameState(newState);
            } else {
                newState = {
                    ...state,
                    gameState: GameState.CHOOSING_CARD,
                    firstCardId: null,
                    secondCardId: null,
                    turns: state.matches + 1,
                    cards: {
                        ...state.cards,
                        [state.firstCardId]: {
                            ...firstCard,
                            flipped: false,
                        },
                        [state.secondCardId]: {
                            ...secondCard,
                            flipped: false,
                        },
                    }
                };
            }
            break;

        default:
            newState = state;
    }
    return newState;
};

export { updateApp }
