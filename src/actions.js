
const ActionTypes = {
    SELECT_CARD: 'SELECT_CARD',
};

const selectCard = cardId => {
    return {
        type: ActionTypes.SELECT_CARD,
        cardId: cardId,
    };
};

export {
    ActionTypes,
    selectCard,
}