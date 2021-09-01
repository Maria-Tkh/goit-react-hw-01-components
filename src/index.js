import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppProfile } from 'components/App';
import { AppStatistics } from 'components/App';
import { AppFriends } from 'components/App';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppProfile />
    <AppStatistics />
    <AppFriends />
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <React.StrictMode>
//     <AppStatistics />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
