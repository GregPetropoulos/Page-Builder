import { routes } from './routes.js';
import axios from 'axios';

const ApiLogin = async userInfo => {
	try {
		const response = await axios.post(routes.login(), userInfo);
		return response.data;
	} catch (err) {
		const error = err;
		if (error.response && error.response.status !== 404) {
			const data = error.response.data;
			if (data) {
				return { error: data.error };
			}
		}
		return { error: 'Something went wrong, try again later' };
	}
};
const ApiLogOut= async userInfo => {
	try {
		const response = await axios.post(routes.logout(), userInfo);
		console.log(response)
		return response.data;
	} catch (err) {
		const error = err;
		if (error.response && error.response.status !== 404) {
			const data = error.response.data;
			if (data) {
				return { error: data.error };
			}
		}
		return { error: 'Something went wrong, try again later' };
	}
};

const ApiRegister = async (email, password) => {
	try {
		const response = await axios.post(routes.register(), {
			email,
			password,
		});
		return response.data;
	} catch (err) {
		const error = err;
		if (error.response && error.response.status !== 404) {
			const data = error.response.data;
			if (data) {
				return { error: data.error };
			}
		}
		return { error: 'Something went wrong, try again later' };
	}
};

const accountService = {
	ApiLogin,
	ApiLogOut,
	ApiRegister,
};

export default accountService;
