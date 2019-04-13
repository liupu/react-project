import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer/main';
import App from './app/main';
const rootElement = document.querySelector("#root");


//this is store created from reducer
let store = createStore(reducer);


const render1 = () =>{
    render(
        <App 
        // this is the way get state from store
        value = {store.getState()}
        //this is the way we change the state
        //store.dispatch()会触发reducer function的自动执行
        addFun = {()=>store.dispatch({type:'ADD'})}
        minusFun = {()=>store.dispatch({type:'MINUS'})}
        />,rootElement
    )
}
render1();
store.subscribe(render1);