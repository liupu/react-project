import React, { Component } from 'react';

class App extends Component {
    addNum(){
        //同级组件之间传值
        const number = Number(this.refs.num.value); 
        console.log(number);
        this.props.addNum(number);
        this.refs.num.value = '';
    }
    render() {
        return(
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.addFun}>++</button>
                {' '}
                <button onClick={this.props.minusFun}>--</button>
                {' '}
                <input type='text' placeholder='Please input a number' ref='num'/>
                {' '}
                <button onClick={this.addNum.bind(this)}>add the input number</button>
            </div>
        )
    }
}

export default App;