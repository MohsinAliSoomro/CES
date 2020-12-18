import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
	name: 'toggle',
	initialState: {
		isShow: false
	},
	reducers: {
		show: (state) => {
			state.isShow = true;
		},
		hide: (state) => {
			state.isShow = false;
		}
	}
});
//export actions
export const { show, hide } = sidebarSlice.actions;
//export reducer 
export default sidebarSlice.reducer;
