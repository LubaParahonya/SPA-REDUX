
import { useSelector } from "react-redux";
import { ADD_INITIAL, ADD_VALUE_INPUT,
         ADD_ITEM, DELETE_ITEM, IS_LIKE, 
         SET_FILTER, ADD_VALUE_INPUT_DIS, 
         ADD_VALUE_INPUT_PRICE, ADD_VALUE_INPUT_CAT,
         SET_FILTER_CAT, SEARCH_ITEM, 
         SEARCH} from "./actionsType";
let start = 100

export const addInitialState = (result) => ({
    type: ADD_INITIAL,
    payload : result
}
)
export const addValueInput = (value) => ({
    type: ADD_VALUE_INPUT,
    payload: value
})
export const addValueInputCatecories = (value) => ({
    type: ADD_VALUE_INPUT_CAT,
    payload: value
})
export const addValueInputDiscription = (value) => ({
    type: ADD_VALUE_INPUT_DIS,
    payload: value
})
export const addValueInputPric = (value) => ({
    type: ADD_VALUE_INPUT_PRICE,
    payload: value
})
export const addItem = (valueInput, valueInputCategory, valueInputDiscription, valueInputPrice) => ({
    type: ADD_ITEM,
    payload: {
                title: valueInput,
                catecories: valueInputCategory,
                discription: valueInputDiscription,
                price: valueInputPrice,
                id: ++start
            }
})
export const deleteItem = (id) => ({
        type: DELETE_ITEM,
        payload: id
})
export const isLikeAction = (id) => ({
        type: IS_LIKE,
        payload: id
})
export const searchFilterItem = (value, list) => ({
    type: SEARCH_ITEM,
    payload: {
        list: list,
        value:value
    }
})
export const searchItem = (value) =>( {
    type: SEARCH,
    payload: value
})
export const setFilter = (filter) => ({ type: SET_FILTER, payload: { filter } });
export const setFilterCategory = (filter) => ({ type: SET_FILTER_CAT,payload: { filter }});





