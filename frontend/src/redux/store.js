import { configureStore } from '@reduxjs/toolkit'
import programsReducer from '../views/programSlice.js'
import studentReducer from '../views/studentSlice'
import departmentReducer from '../components/Form/dep/departmentSlice'
import subjectReducer from '../views/FormSlice'
import semesterReducer from '../components/Form/form/semesterSlice'
export default configureStore({
    reducer: {
        program: programsReducer,
        student: studentReducer,
        department: departmentReducer,
        subject: subjectReducer,
        semester:semesterReducer
    }
})