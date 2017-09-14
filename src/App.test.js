import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Components/Card';
import Error from './Components/Error';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Card renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});

it('Error renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error visible={true} />, div);
});
