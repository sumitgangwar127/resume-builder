let initialState = {
    fname:"",
    lname:"",
    email:"",
    contact:"",
    city:"",
    state:"",
    degree:"",
    college:"",
    cgpa:"",
    year:"",
    isPublic:false,
}

let detialsReducer = (state = initialState , action)=>{

    switch(action.type){
        case "SET_DETAILS":
            return {...state,...action.payload};
        default:
            return state;

    }

}

export default detialsReducer;