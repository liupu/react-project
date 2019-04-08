import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
let App = ({ v, actions }) => {
    //console.log(actions);
    return (
        <div>
            <h1>{v}</h1>
            <button onClick={actions.addFun}>加法运算</button>
            {"  "}
            <button onClick={actions.minusFun}>减法运算</button>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            v: state.v
        }
    },
    (dispatch) => {
        return {
            // actions : actions.bindActionCreators()
            // actions: {
            //     zengjia: function () {
            //         dispatch({ 'type': 'ZENGJIA' })
            //     },
            //     jianshao: function () {
            //         dispatch({ 'type': 'JIANSHAO' })
            //     }
            // }
            actions: bindActionCreators(actions,dispatch)

        }
    }
)(App);
