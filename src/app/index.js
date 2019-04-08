import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

let App = ({ num , actions }) => {
    return (
        <div>
            <p>{num}</p>
            <button onClick = { actions.addFun }>+</button>
            {" "}
            <button onClick = { actions.minusFun }>-</button>
        </div>
    )
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
