import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		email: '',
		firstName: '',
		lastName: '',
		userName: '',
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
			state.email = '';
			state.firstName = '';
			state.lastName = '';
			state.userName = '';
		},
	},
});

export const { setUser, editUserProfile, resetUserProfile } = userSlice.actions;
export default userSlice.reducer;
