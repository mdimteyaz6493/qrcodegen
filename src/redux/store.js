// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slice/Counterslice';
import ModalReducer from "./Slice/ModalSlice"
import DataReducer from "./Slice/DataSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Modal:ModalReducer,
    PDATA:DataReducer
  },
});
