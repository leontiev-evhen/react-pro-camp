import {
	REQUEST_FIXTURES,
	REQUEST_FIXTURES_SUCCEEDED,
	REQUEST_FIXTURES_FAILED,
	UPDATE_FIXTURES,
} from '../constants/actionTypes';

export const requestFixtures = () => ({
	type: REQUEST_FIXTURES,
});

export const requestFixturesSucceeded = teams => ({
	type: REQUEST_FIXTURES_SUCCEEDED,
	payload: teams,
});

export const requestFixturesFailed = error => ({
	type: REQUEST_FIXTURES_FAILED,
	error,
});

export const updateFixtures = () => ({
	type: UPDATE_FIXTURES,
});
