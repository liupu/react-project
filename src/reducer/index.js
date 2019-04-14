
export default (state,action)=> {
    if(state===undefined){
        state = {"v":0, "a":1, "b":2}
    }
    switch(action.type){
        case "ADDFUN":
        return {"v":state.v+1, "a":1, "b":2};
        case "MINUSFUN":
        return {"v":state.v-1, "a":1, "b":2};
    }
    return state;
}