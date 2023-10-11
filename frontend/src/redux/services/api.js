import { setLogIn } from '../reducers/authSlice';
import { setUser } from '../reducers/userSlice';

export const loginUser = (email, password) => {
	return async (dispatch) => {
		try {
			const response = await fetch('http://localhost:3001/api/v1/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				const data = await response.json();
				const token = data.body.token;

				sessionStorage.setItem('token', token);
				dispatch(setLogIn({ token: token }));
				return { success: true };
			} else {
				console.log('Login failed');
				return { success: false };
			}
		} catch (error) {
			console.error(error);
			return { success: false };
		}
	};
};

export const profileUser = (token) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/profile',
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.ok) {
				const data = await response.json();
				const email = data.body.email;
				const firstName = data.body.firstName;
				const lastName = data.body.lastName;
				const userName = data.body.userName;

				dispatch(
					setUser({
						email: email,
						firstName: firstName,
						lastName: lastName,
						userName: userName,
					})
				);
			}
		} catch (error) {
			console.error(error);
		}
	};
};
