import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
let App = ({ num, actions }) => {
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={actions.addFun}>加法运算</button>
            {"  "}
            <button onClick={actions.minusFun}>减法运算</button>
        </div>
    )
}
export default connect(
    (state) => {
        return {
            num: state.num
        }
    },
    (dispatch) => {
        return {
            // actions : actions.bindActionCreators()
            // actions: {
            //     addFun: function () {
            //         dispatch({ 'type': 'ADDFUN' })
            //     },
            //     minus: function () {
            //         dispatch({ 'type': 'MINUSFUN' })
            //     }
            // }
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(App);
