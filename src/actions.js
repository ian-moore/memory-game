import { GameState } from './model';

const ActionTypes = {
    CHECK_MATCH: 'CHECK_MATCH',
    SELECT_CARD: 'SELECT_CARD',
};

const selectCard = (cardId, newGameState) => {
    return { 
        type: ActionTypes.SELECT_CARD, 
        cardId: cardId,
        gameState: newGameState,
    };
};

const checkForMatch = () => {
    return { type: ActionTypes.CHECK_MATCH };
};

const selectCardAndCheck = cardId => {
    return (dispatch, getState) => {
        const state = getState();
        const newGameState = state.firstCardId 
            ? GameState.AWAITING_MATCH 
            : GameState.CHOOSING_CARD;

        dispatch(selectCard(cardId, newGameState));

         if (newGameState === GameState.AWAITING_MATCH) {
            setTimeout(() => {
                dispatch(checkForMatch());
            }, 1500);
         }
    };
};

export {
    ActionTypes,
    selectCard,
    checkForMatch,
    selectCardAndCheck,
}