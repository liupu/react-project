#### react-project
#### redux
```
创建一个reducer

( state, action ) => {
    let {type} = action;
    switch(type){
        case 'XXX1':
        return state + XXX1;
        case 'XXX2':
        return state + XXX2;
        case 'XXX3':
        return state + action.XXX3;
        default:
        return state;
    }
}

创建store

import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer);

如果要使用中间件比如thunk、promise、logger

const store = createStore(
    reducer,
    applyMiddleware(thunk,promise,logger)
);

取得state

store.getState()

发起一个action

store.dispatch({type:'XXX'})

发起action时，往recucer中传入一个新的参数YYY，来改变state

store.dispatch({type:'XXX',YYY})

在rudecer中相应的改变
case 'XXX':
return state + action.YYY;

事件操作dispatch时，可以传入一个action值,例如传入一个number

(number) => store.dispatch({type:'XXX',number})

例子如下

const render1 = () => {
    render(
        <App
            value={store.getState()}
            addFun={() => store.dispatch({ type: 'ADD' })}
            minusFun={() => store.dispatch({ type: 'MINUS'})}
            //向action中传值number
            addNum = {(number) => store.dispatch({ type: 'ADDNUM',number})}
        />, rootElement
    )
}
render1();
store.subscribe(render1);


监听state,更新view

store.dispatch();

render1()方法渲染页面

更新页面

store.subscribe(render1)

```