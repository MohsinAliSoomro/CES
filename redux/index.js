import { createStore, combineReducers, applyMiddleware } from 'redux';
import SidebarReducer from './slidebar/reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
	sidebar: SidebarReducer
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;