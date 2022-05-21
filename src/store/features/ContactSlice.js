import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const ContactSlice = createSlice({
    name: "contact",
    initialState: {
        value: [
            { name: "yousaf", email: "y@gmail.com", id: shortid.generate() },
        ],
        loadedValue: {name:"",email:"",id:""},
    },
    reducers: {
        add: (state, action) => {
            state.value = [...state.value, action.payload];
        },

        remove: (state, action) => {
            state.value = state.value.filter(
                (element) => element.id !== action.payload
            );
        },

        load: (state, action) => {
            state.loadedValue = action.payload;
        },

        unload: (state) => {
            state.loadedValue = {};
        },
        update: (state, action) => {
            state.value = state.value.map((element) => {
                if (element.id === action.payload.id) {
                    return action.payload;
                }
                return element;
            });
        }
    },
});

export const { add, remove, load, unload, update } = ContactSlice.actions;

export default ContactSlice.reducer;
