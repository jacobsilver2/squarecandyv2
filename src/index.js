import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'shopify-buy';
import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = Client.buildClient({
    storefrontAccessToken: 'ffb8ab80b6733da9a541fcfff02af703',
    domain: 'jacobs-sample-store.myshopify.com'
  });
  

ReactDOM.render(<App client={client}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
