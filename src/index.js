import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//既不是字符串也不是Html,JSX一种javaScript的语法扩展
//const element = <h1>Hello, world!</h1>;

const formatName = (user) => {
    return user.firstName + ` ` + user.lastName;
};
const getGreeting = (user) => {
    return user? <h2>Welcome to, {formatName(user)} Page!</h2>:<h2>Welcome to Stranger Page.</h2>
}


const user = {
    firstName:`Jay`,
    lastName:`Chou`
};
//书写JSX时，一般会带上换行和缩进，这样可以增强代码的可读性，
//为了防止分号自动插入带来的bug,提倡在JSX的外面加上一个小括号
const element = (
    <div>
        <h1 tabIndex="0"> 
            Hello, {formatName(user)}!
        </h1>
        {getGreeting(user)}
    </div>
);
//JSX属性
//JSX可以使用引号来定义以字符串为值的属性 
//const element = <div tabIndex="0">
//JSX也可以使用大括号来定义以JavaScript表达式为值的属性
//const element = <img src={user.imgUrl}></img>;

ReactDOM.render(
    element,
    document.querySelector(`#root`)
);

