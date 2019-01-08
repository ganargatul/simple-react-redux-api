const mathReducer = (state = {
    result: 1,
    lastValues: [],
    username: "gg"
},action) =>{
    switch (action.type) {
        case "ADD":
            state.result += action.payload;
            state.lastValues.push(action.payload)
            break;
        case "SUBTRACT":
            
            break;
        default:
            break;
    }
    return state;
}

export default mathReducer;