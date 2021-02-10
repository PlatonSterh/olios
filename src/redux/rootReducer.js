import { combineReducers } from 'redux';
import burgerMenuReducer from './burger-menu/burger-menu.reducer';
import categoriesReducer from './categories/categories.reducer';
import searchReducer from './search/search.reducer';

export default combineReducers({
  burgerMenu: burgerMenuReducer,
  categories: categoriesReducer,
  search: searchReducer
});