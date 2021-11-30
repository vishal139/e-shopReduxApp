import {actionType} from '../constants/actionType'

export const SetProducts = (products) =>{
    return{
        type:actionType.SET_PRODUCTS,
        payload:products,
    }
}

export const SelectedProduct = (product) =>{
    return{
        type:actionType.SELECTED_PRODUCT,
        payload:product,
    }
}

export const removeSelectedProduct = ()=>{
    return{
        type:actionType.REMOVE_SELECTED_PRODUCT,
    }
}