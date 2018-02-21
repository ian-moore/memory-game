import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Card
      cardId={1}
      name={'Historical Figure'}
      isClickable={true}
      flipped={false}
      onClick={() => false}
    />, 
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
