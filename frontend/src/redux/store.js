import { configureStore } from '@reduxjs/toolkit'
import programsReducer from '../views/programSlice.js'
import studentReducer from '../views/studentSlice'
export default configureStore({
    reducer: {
        program: programsReducer,
        student:studentReducer
    }
})