import { 
    ADD_INITIAL, 
    ADD_VALUE_INPUT, 
    ADD_ITEM, 
    DELETE_ITEM, 
    IS_LIKE,
    SET_FILTER,
    ADD_VALUE_INPUT_DIS,
    ADD_VALUE_INPUT_PRICE,
    ADD_VALUE_INPUT_CAT,
    SET_FILTER_CAT,
    SEARCH_ITEM,
    SEARCH
     } from "../actionsType"

import { VISIBILITY_FILTERS } from "../filterList";


const initialState = {
        allIds: [],
        byIds: {}
      };

const initialStateFiter = VISIBILITY_FILTERS.ALL;

export const listReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_INITIAL:{
            const listData = action.payload.map(el => {
                el.isLike = false
                return el
            })
            // return [...listData]
            return {
                ...state,
                allIds: [...listData],
                byIds: {}
              };
        }
        case ADD_ITEM: {
            const { title, id, catecories, discription, price} = action.payload;
            return {
              ...state,
              allIds: [{
                id,
                catecories,
                discription, 
                price,
                title,
                isLike: false,
                url: 'https://image.pngaaa.com/190/2716190-middle.png'
            }, ...state.allIds],
              byIds: {
                id,
                ...state.byIds
                }
              }
            };

        
        case DELETE_ITEM: {
            console.log('test', state.allIds)
            // return state.allIds.filter(el => el.id !== action.payload)
            return {
                allIds: [... state.allIds.filter(el => el.id !== action.payload)],
                byIds: {
                  ...state.byIds
                  }
                }
        }
        case IS_LIKE: {
            return {
                allIds: [... state.allIds.map(el => {
                    if(el.id === action.payload){
                        el.isLike = !el.isLike
                        return el
                    }else{
                        return el
                    } } )],
                byIds: {
                  ...state.byIds
                  }
                }
        }
        default:
            return state

    }
}
export const inputValueReducer = (state='', action) => {
    switch(action.type){
        case ADD_VALUE_INPUT: {
            return  action.payload
        }
        default:
            return state

    }
}
export const inputValueCatecories = (state='', action) => {
    switch(action.type){
        case ADD_VALUE_INPUT_CAT: {
            return  action.payload
        }
        default:
            return state

    }
}
export const inputValueDiscription = (state='', action) => {
    switch(action.type){
        case ADD_VALUE_INPUT_DIS: {
            return  action.payload
        }
        default:
            return state

    }
}
export const inputValuePrice = (state='', action) => {
    switch(action.type){
        case ADD_VALUE_INPUT_PRICE: {
            return  action.payload
        }
        default:
            return state

    }
}
export const visibilityFilter = (state = initialStateFiter, action) => {
  switch (action.type) {
    case SET_FILTER:{
        return action.payload.filter;
    }
    default:
      return state;
  }
};
export const filterCategory = (state = ['Кремы и лосьоны для тела', 
    'Баттер для тела', 'Кремы для рук', 
    'Кремы для ног', 'Гели для душа', 
    'Скрабы для теля'], action) => {
        switch (action.type) {
            case SET_FILTER_CAT:{
                return action.payload.filter;
            }
            default:
              return state;
          }
}

export const search = (state = '', action) =>{
    switch(action.type){
        case SEARCH: {
            return action.payload
        }
        default:
            return state
    }
}




