import { setLogIn } from '../reducers/authSlice';
import { setUser, editUserProfile } from '../reducers/userSlice';

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

				dispatch(setLogIn({ token: token }));
				return { success: true };
			} else {
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

				dispatch(
					setUser({
						email: data.body.email,
						firstName: data.body.firstName,
						lastName: data.body.lastName,
						userName: data.body.userName,
					})
				);
			}
		} catch (error) {
			console.error(error);
		}
	};
};

export const editUser = (token, userName) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/profile',
				{
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ userName }),
				}
			);

			if (response.ok) {
				const data = await response.json();
				const newUserName = data.body.userName;

				dispatch(editUserProfile(newUserName));
				console.log(data);
				return { success: true };
			}
		} catch (error) {
			console.error(error);
			return { success: false };
		}
	};
};
