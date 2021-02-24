import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ListDepartment } from '../../../functions/department';

export const fetchAllDepartment= createAsyncThunk('department/fetchAllDepartment', async () => {
	const result = await ListDepartment();
	return result.data;
});

const departmentSlice = createSlice({
	name: 'department',
	initialState: {
		loading: true,
		error: null,
		departments: []
	},
	reducers: {},
	extraReducers: {
		[fetchAllDepartment.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.departments.length = 0;
		},
		[fetchAllDepartment.fulfilled]: (state, action) => {
			state.loading = false;
			state.error = null;
			state.departments.push(action.payload);
		},
		[fetchAllDepartment.rejected]: (state) => {
			state.loading = false;
			state.error = 'The error in fetching department';
			state.departments.length = 0;
		}
	}
});

export default departmentSlice.reducer;
