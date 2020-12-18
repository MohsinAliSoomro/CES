import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slidebar/sidebar'

export default configureStore({
	reducer: {
		toggle: sidebarReducer,
	}
});

 
