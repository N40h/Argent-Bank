import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		email: null,
		firstName: null,
		lastName: null,
		userName: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.userName = action.payload.userName;
		},
		editUserProfile: (state, action) => {
			state.userName = action.payload;
		},
		resetUserProfile: (state) => {
			state.email = null;
			state.firstName = null;
			state.lastName = null;
			state.userName = null;
		},
	},
});

export const { setUser, editUserProfile, resetUserProfile } = userSlice.actions;
export default userSlice.reducer;
