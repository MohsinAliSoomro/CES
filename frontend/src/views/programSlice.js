import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ListProgram } from '../functions/program';

export const fetchAllPrograms = createAsyncThunk('program/fetchAllPrograms', async (userId, thunkApi) => {
	const result = await ListProgram();
	return result.data;
});

const programSlice = createSlice({
	name: 'program',
	initialState: {
		loading: true,
		error: null,
		programs: []
	},
	reducers: {},
	extraReducers: {
		[fetchAllPrograms.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.programs.length = 0;
		},
		[fetchAllPrograms.fulfilled]: (state, action) => {
			state.loading = false;
			state.error = null;
			state.programs.push(action.payload);
		},
		[fetchAllPrograms.rejected]: (state) => {
			state.loading = false;
			state.error = 'The error in fetching programs';
			state.programs.length = 0;
		}
	}
});

export default programSlice.reducer;
