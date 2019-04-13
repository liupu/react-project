//this is reducer created for createStore()
export default (state=0,action) => {
    const {type} = action;
    switch(type){
        case 'ADD':
        return state + 1;
        case 'MINUS':
        return state -1;
        default:
        return state;
    }
}