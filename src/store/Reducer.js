const initialstate={emp:[]}
const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "submit":
            return {...state,emp:action.payload};
        default:return state

    }
}
export default reducer;