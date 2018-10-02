import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'shopify-buy';
import './App.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = Client.buildClient({
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    domain: 'jacobs-sample-store.myshopify.com'
  });
  

ReactDOM.render(<App client={client}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
