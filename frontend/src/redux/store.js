import { configureStore } from '@reduxjs/toolkit'
import programsReducer from '../views/programSlice.js'
import studentReducer from '../views/studentSlice'
import departmentReducer from '../components/Form/dep/departmentSlice'
export default configureStore({
    reducer: {
        program: programsReducer,
        student: studentReducer,
        department:departmentReducer
    }
})