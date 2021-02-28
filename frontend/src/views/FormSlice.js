import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FindSubject } from '../functions/subject';

export const fetchAllSubject = createAsyncThunk('subject/fetchAllSubject', async (id) => {
	const result = await FindSubject(id);
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
			state.error = 'The error in fetching subject';
			state.subjects.length = 0;
		}
	}
});

export default SubjectSlice.reducer;
