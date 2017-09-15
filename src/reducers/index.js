import { combineReducers } from 'redux';
import todoLists from './todoLists';
import activeList from './activeList';

const rootReducer = combineReducers({
  todoLists,
  activeList,
});

export default rootReducer;
