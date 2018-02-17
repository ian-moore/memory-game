import { getInitialData } from './model';

const initialState = {
    cards: getInitialData(),
    firstCardId: null,
    secondCardId: null,
};

export function updateApp(state = initialState) {
    return state;
}
