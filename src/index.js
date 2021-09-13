import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login.js';
import TransactionTable from './displayTransaction.js'
import reportWebVitals from './reportWebVitals';
import CreateAccountButton from './createAccount.js'


// everything inside DOM will be managed by React DOM and show on screen
ReactDOM.render(
  <React.StrictMode>
    <Login />
    <TransactionTable />
    <CreateAccountButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// main 