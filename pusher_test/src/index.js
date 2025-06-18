import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "2009806",
  key: "9e7a2f8e59d0f755ffba",
  secret: "f9f22e3e533b57a922bb",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
