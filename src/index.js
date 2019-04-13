import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
//import { Provider } from 'react-redux';
//import reducer from './reducer';
import reducer from './reducer/main';
import App from './app/main';
const rootElement = document.querySelector("#root");

let store = createStore(reducer);

// render(
//     <Provider store={store}>
//         <div>
//             <App/>
//         </div>
//     </Provider>,
//     rootElement
// )

const render1 = () =>{
    render(
        <App 
        value = {store.getState()}
        addFun = {()=>store.dispatch({type:'ADD'})}
        minusFun = {()=>store.dispatch({type:'MINUS'})}
        />,rootElement
    )
}
render1();
store.subscribe(render1);