import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import reducer from './reducer/main';
import App from './app/main';
const rootElement = document.querySelector("#root");

let store = createStore(
    reducer,
    applyMiddleware(thunk,promise,logger)
);


const render1 = () => {
    render(
        <App
            value={store.getState()}
            addFun={() => store.dispatch({ type: 'ADD' })}
            minusFun={() => store.dispatch({ type: 'MINUS'})}
            //向action中传值number
            addNum = {(number) => store.dispatch({ type: 'ADDNUM',number})}
        />, rootElement
    )
}
render1();
store.subscribe(render1);