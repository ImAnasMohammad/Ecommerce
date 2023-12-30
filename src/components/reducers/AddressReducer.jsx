

export const InitialAddressState ={
    name      :'',
    phone     :'',
    address   :'',
    district  :'',
    state     :'',
    pinCode   :'',
    type      :0,
    isDefault :0 ,
    _id:''
}

export const addressReducer = (state,action)=>{
    let newState = {...state}
    switch(action.type){
        case "CHANGE_INPUT":newState[action.payload.name] = action.payload.value
        break;
        case "CHANGE_DEFAULT_ADDRESS":newState["isDefault"] = action.payload
        break;
        case "CHANGE_ADDRESS_TYPE":newState["type"] = action.payload
        break;
        case "CHANGE_ALL_ADDRESS":newState=action.payload
        break;
    }
    return newState
}