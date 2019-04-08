//reduce接收两个参数state，action
export default (state, action) => {
    if (state === undefined) {
        state = { "num": 0, "a": 1, "b": 1 }
        return state;
    }
    switch(action.type){
        case "ADDFUN":
        return {...state, "num":state.num+1};
        case "MINUSFUN":
        return {...state,"num":state.num-1};
    }
  
}
