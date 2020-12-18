import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
	name: 'toggle',
	initialState: {
		isShow: false,
	},
	reducers: {
		show: (state) => {
			state.isShow = true;
		},
		hide: (state) => {
			state.isShow = false;
		}
	},
});

export const { show, hide } = sidebarSlice.actions;

export const selectShow = state => state.toggle.isShow;

export default sidebarSlice.reducer;