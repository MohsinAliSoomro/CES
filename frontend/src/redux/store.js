import { configureStore } from '@reduxjs/toolkit'
import programsReducer from '../views/programSlice.js'
export default configureStore({
    reducer: {
       program:programsReducer
    }
})