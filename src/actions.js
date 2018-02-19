import { GameState } from './model';

const ActionTypes = {
    CHECK_MATCH: 'CHECK_MATCH',
    SELECT_CARD: 'SELECT_CARD',
};

const checkForMatch = () => {
    return { type: ActionTypes.CHECK_MATCH };
};

const selectCard = cardId => {
    return (dispatch, getState) => {
        const state = getState();
        const newGameState = state.firstCardId 
            ? GameState.AWAITING_MATCH 
            : GameState.CHOOSING_CARD;

        dispatch({ 
            type: ActionTypes.SELECT_CARD, 
            cardId: cardId,
            gameState: newGameState,
         });

         if (newGameState === GameState.AWAITING_MATCH) {
            setTimeout(() => {
                dispatch(checkForMatch());
            }, 1000);
         }
    };
};

export {
    ActionTypes,
    selectCard,
}