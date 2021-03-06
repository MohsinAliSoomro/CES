import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StudentProgram } from '../functions/student';

export const fetchAllStudent = createAsyncThunk('student/fetchAllStudent', async (id) => {
	const result = await StudentProgram(id);
	return result.data;
});

const studentSlice = createSlice({
	name: 'student',
	initialState: {
		loading: true,
		error: null,
		students: [],
		list: []
	},
	reducers: {},
	extraReducers: {
		[fetchAllStudent.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.students.length = 0;
		},
		[fetchAllStudent.fulfilled]: (state, action) => {
			state.loading = false;
			state.error = null;
			state.students.push(action.payload);
		},
		[fetchAllStudent.rejected]: (state) => {
			state.loading = false;
			state.error = 'The error in fetching student';
			state.students.length = 0;
		}
	}
});

export default studentSlice.reducer;
