import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

const elem = (<h2>Hello world</h2>

)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
