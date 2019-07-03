/* eslint-disable */
import axios from 'axios';
import { API_URL, API_KEY, API_HOST } from '../constants';

const client = axios.create({
	baseURL: API_URL,
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': API_HOST,
	},
});

const request = async function(options) {
	const onSuccess = function(response) {
		if (response.data.api.results === 0) {
			return Promise.reject({ message: 'Nothing was found' });
		}
		console.info('Request Successful!', response);
		return response.data;
	};

	const onError = function(error) {
		console.error('Request Failed:', error.config);

		if (error.response) {
			console.error('Status:', error.response.status);
			console.error('Data:', error.response.data);
			console.error('Headers:', error.response.headers);
		} else {
			console.error('Error Message:', error.message);
		}

		return Promise.reject(error.response || error.message);
	};

	try {
		const response = await client(options);
		return onSuccess(response);
	} catch (error) {
		return onError(error);
	}
};

export default request;
