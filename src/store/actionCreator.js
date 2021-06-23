const empDetails=(state)=>{
    return(dispatch)=>{
        dispatch({
            type:"submit",
            payload:state
        })
    }
}
export default {empDetails};