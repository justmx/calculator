import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './sass/main.scss';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
