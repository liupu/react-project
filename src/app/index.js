import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
// let App = ({ num , actions }) => {
//     return (
//         <div>
//             <p>{num}</p>
//             <button onClick = { actions.addFun }>+</button>
//             {" "}
//             <button onClick = { actions.minusFun }>-</button>
//         </div>
//     )
// }
class App extends Component{
    constructor(props){
        console.log(props)
        super(props)
    }
    addFunAsInput(){
        let number = Number(this.refs.inputNum.value);
        console.log(number);
        this.props.actions.addFunAsInput(number);
    }
    render(){
        return(
            <div>
                <p>{this.props.num}</p>
                <button onClick={this.props.actions.addFun}>+</button>
                {" "}
                <button onClick={this.props.actions.minusFun}>-</button>
                {" "}
                <input type="text" placeholder='Please input a number' ref='inputNum'/>
                {" "}
                <button onClick={this.addFunAsInput.bind(this)}>add as the input number</button>
            </div>
        )
    }
}
export default connect(
    //将state和actions传入App中，使得App组件获得state和actions
    (state) => {
        return {
            num:state.num
        }
    },
    (dispatch) => {
        //将actions和dispatch进行绑定
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(App);
