import React from 'react';
import ReactDOM from 'react-dom/client';

// Chapter Seven: What is Event? Example? Two way Data binding?
// import App from './event-intro/app';

// Chapter Seven: Practice Problem
import App from './practice-problem/app';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
