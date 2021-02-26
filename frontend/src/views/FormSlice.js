import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ListSubject } from '../functions/subject';

export const fetchAllSubject = createAsyncThunk('subject/fetchAllSubject', async () => {
	const result = await ListSubject();
	return result.data;
});

const SubjectSlice = createSlice({
	name: 'subject',
	initialState: {
		loading: true,
		error: null,
		subjects: []
	},
	reducers: {},
	extraReducers: {
		[fetchAllSubject.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.subjects.length = 0;
		},
		[fetchAllSubject.fulfilled]: (state, action) => {
			state.loading = false;
			state.error = null;
			state.subjects.push(action.payload);
		},
		[fetchAllSubject.rejected]: (state) => {
			state.loading = false;
			state.error = 'The error in fetching programs';
			state.subjects.length = 0;
		}
	}
});

export default SubjectSlice.reducer;
