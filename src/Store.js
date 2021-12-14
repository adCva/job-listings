import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './Features/filterSlice';


export default configureStore({
  reducer: {
    filters: filterSlice
  }
})