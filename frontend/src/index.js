import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    Welcome!
  </div>
);

const domContainer = document.createElement('div');
document.body.appendChild(domContainer);
ReactDOM.render(<App />, domContainer);
