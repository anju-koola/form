import {combineReducers} from 'redux';
import Reducer from "./Reducer"

const mainreducer=combineReducers({
    state:Reducer
})
export default mainreducer;