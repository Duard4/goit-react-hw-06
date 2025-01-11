import { createSlice } from "@reduxjs/toolkit";
import initContacts from "../data/contacts.json";

const slice = createSlice({
	name: "contacts",
	initialState: {
		items: initContacts,
	},
	reducers: {
		addContact(state, action) {
			state.items.push(action.payload);
		},
		deleteContact(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
	},
});

// Експортуємо фабрики екшенів
export const { addContact, deleteContact } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
