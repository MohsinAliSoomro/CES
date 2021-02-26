import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ListSemester } from '../../../functions/semester';

export const fetchAllSemester = createAsyncThunk('semester/fetchAllSemester', async () => {
	const result = await ListSemester();
	return result.data;
});

const semesterSlice = createSlice({
	name: 'semester',
	initialState: {
		loading: true,
		error: null,
		semesters: []
	},
	reducers: {},
	extraReducers: {
		[fetchAllSemester.pending]: (state) => {
            state.loading = true;
            state.error = null;
			state.semesters.length = 0;
		},
		[fetchAllSemester.fulfilled]: (state, action) => {
			state.loading = false;
			state.error = null;
			state.semesters.push(action.payload);
		},
		[fetchAllSemester.rejected]: (state) => {
			state.loading = false;
            state.error = 'The error in fetching student';
            state.semesters.length = 0;
		}
	}
});

export default semesterSlice.reducer;
