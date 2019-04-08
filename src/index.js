import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './app';
const rootElement = document.querySelector("#root");

let store = createStore(reducer);

render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    rootElement
)
