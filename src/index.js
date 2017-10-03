import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import inputValidation from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(inputValidation);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

