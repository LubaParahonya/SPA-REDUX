import { combineReducers } from "redux";
import { inputValueReducer, listReducer, visibilityFilter,
        inputValueCatecories, inputValueDiscription,
        inputValuePrice, filterCategory, search
 } from "../reducer/listReducer";

const rootReducer = combineReducers({
    list: listReducer,
    inputValue: inputValueReducer,
    visibilityFilter: visibilityFilter,
    inputValueCatecories: inputValueCatecories,
    inputValueDiscription: inputValueDiscription,
    inputValuePrice: inputValuePrice,
    filterCategory: filterCategory,
    search:search

})

export default rootReducer