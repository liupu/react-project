export default (state,action)=> {
    if(state===undefined){
        state = {"num":0, "a":1, "b":2};
        return state;
    }
    switch(action.type){
        case "ADDFUN":
        return {"num":state.num+1, "a":1, "b":2};
        case "MINUSFUN":
        return {"num":state.num-1, "a":1, "b":2};
    }
}