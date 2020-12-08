import { createStore, combineReducers, applyMiddleware } from 'redux';
import SidebarReducer from './slidebar/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const RootReducer = combineReducers({
	sidebar: SidebarReducer
});

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
