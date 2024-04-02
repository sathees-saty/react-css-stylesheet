import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpenseEntryItem.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function DisplayItem() {
//  return <h1 className="greeting">Hello, world React !</h1>;
return (
    <><h5>Display Item List</h5><div className="itemStyle">
    <div><b>Item:</b> <em>Mango Juice</em></div>
    <div><b>Amount:</b> <em>30.00</em></div>
    <div><b>Spend Date:</b> <em>2020-10-10</em></div>
    <div><b>Category:</b> <em>Food</em></div>
  </div></>
);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayItem />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();