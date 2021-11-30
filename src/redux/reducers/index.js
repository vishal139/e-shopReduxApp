import { combineReducers } from "redux";
import {productReducers} from './productReducer'
import { selectedProducetReducer } from "./productReducer";

const rootReducer = combineReducers({
    productReducers,
    selectedProducetReducer
})

export default rootReducer;