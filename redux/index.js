import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../components/sidebar/sidebarSlice';

export default configureStore({
	reducer: {
		toggle: sidebarReducer
	}
});
