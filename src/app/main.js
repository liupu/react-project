import React from 'react';
function App(props){
    return(
        <div>
            <p>
                {props.value}
            </p>
            <button onClick={props.addFun}>++</button>
            {' '}
            <button onClick = {props.minusFun}>--</button>
        </div>
    )
}
export default App;