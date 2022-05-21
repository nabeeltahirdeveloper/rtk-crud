import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./features/ContactSlice";

const Store = configureStore({
    reducer: {
        contact: contactReducer,
    },
});

export default Store;
