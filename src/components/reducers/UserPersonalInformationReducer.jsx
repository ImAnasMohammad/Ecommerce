

export const InitialInformation ={

    fname:'',
    lname:'',
    phone:'',
    email:'',
    gender:2
}

export const userPersonalInformationReducer = (state,action)=>{
    let newState = {...state}
    switch(action.type){
        case "CHANGE_INPUT":newState[action.payload.name] = action.payload.value
        break;
        case "CHANGE_GENDER":newState["gender"] = action.payload.value
        break;
        case "SET_ALL":newState=action.payload
        break;
        default:;
    }
    return newState
}