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
		return response.data;
	};

	const onError = function(error) {
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
