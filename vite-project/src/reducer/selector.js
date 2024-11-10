import { VISIBILITY_FILTERS, FILTER_CATEGORY } from "../filterList";
import { SEARCH_ITEM } from "../actionsType";


export const getTodosState = store => store.list;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.IS_LIKE:
      return allTodos.filter(todo => todo.id.isLike === true);
    case VISIBILITY_FILTERS.ALL :
    default:
      return allTodos;
  }
  // switch(filterCategory){
  //   case FILTER_CATEGORY.CASE_1:
  //     return allTodos.filter(todo => todo.id.catecories === 'Кремы и лосьоны для тела');
  //     case FILTER_CATEGORY.CASE_2:
  //     return allTodos.filter(todo => todo.id.catecories === 'Баттер для тела');
  //     case FILTER_CATEGORY.CASE_3:
  //     return allTodos.filter(todo => todo.id.catecories === 'Кремы для рук');
  //     case FILTER_CATEGORY.CASE_4:
  //     return allTodos.filter(todo => todo.id.catecories === 'Кремы для ног');
  //     case FILTER_CATEGORY.CASE_5:
  //     return allTodos.filter(todo => todo.id.catecories === 'Гели для душа');
  //     case FILTER_CATEGORY.CASE_6:
  //     return allTodos.filter(todo => todo.id.catecories === 'Скрабы для теля');
  //   case VISIBILITY_FILTERS.ALL :
  //   default:
  //     return allTodos;
  // }
};

export const getListByFilter = (store, action) => {
  const allTodos = getTodos(store);
  switch (action.type) {
    case SEARCH_ITEM:{
        return allTodos.filter(el => {
            el.id.title === action.payload ||
            el.id.catecories === action.payload})   
    }
    default:
      return allTodos;
  } 
}


