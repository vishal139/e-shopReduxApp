import {actionType} from '../constants/actionType'

const initialState ={
    products :[],
}
export const productReducers = (state = initialState, {type, payload}) =>{
    switch (type) {
        case actionType.SET_PRODUCTS:
            return{
                ...state,
                products:payload,
            }     
    
        default:
            return state;
    }
}

export const selectedProducetReducer = (state = {},{type, payload}) =>{
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            return{
                ...state,
                ...payload
            }
        case actionType.REMOVE_SELECTED_PRODUCT:
            return{
                
            }
        default:
            return state;
    }

}