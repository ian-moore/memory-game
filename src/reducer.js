import { getInitialData } from './model';

const initialState = {
    cards: getInitialData(),
    firstCardId: null,
    secondCardId: null,
};

const updateApp = (state = initialState, action) => {
    return state;
};

export { updateApp }
