const userReducer = (state = {
    email:"mail@mail.com",
    password: "123456"
},action) =>{
    switch (action.type) {
        case "SET_EMAIL":
        state = {
            ...state,
            email:  action.payload,
           // lastValues: [...state.lastValues,action.payload]
        }
            break;
        case "SET_PASSWORD":
            state = {
                ...state,
                password: action.payload,
                //lastValues: [...state.lastValues,action.payload]
            }
            break;
        default:
            break;
    }
    return state;
}

export default userReducer;