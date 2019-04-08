import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
//React element都是不变的，当元素被创建后，你是无法改变其内容或属性的。
//React 只会更新必要的部分

const tick = () => {
    const element = (
        <div>
            <h1>
                Hello, World!
            </h1>
            <h2>
                It is {new Date().toLocaleTimeString('en')}.
            </h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.querySelector(`#root`)
    );    
}
setInterval(tick,1000);

