/* eslint-disable import/first */
/** @jsx h */
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

import { render, h } from 'preact';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();