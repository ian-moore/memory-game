import { getInitialData } from './model';
import { ActionTypes } from './actions';

const initialState = {
    cards: getInitialData(),
    firstCardId: null,
    secondCardId: null,
};

const updateApp = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ActionTypes.SELECT_CARD:
            newState = {
                ...state,
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
        default:
            newState = state;
    }
    console.log(newState);
    return newState;
};

export { updateApp }
