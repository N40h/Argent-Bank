import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLogged: false,
		token: null,
	},
	reducers: {
		setLogIn: (state, action) => {
			state.isLogged = true;
			state.token = action.payload.token;
		},
		setLogOut: (state) => {
			state.isLogged = false;
			state.token = null;
		},
	},
});

export const { setLogIn, setLogOut } = authSlice.actions;
export default authSlice.reducer;
