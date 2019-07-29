import {
	REQUEST_TEAMS,
	REQUEST_TEAMS_SUCCEEDED,
	REQUEST_TEAMS_FAILED,
} from '../constants/actionTypes';
import teams, { INITIAL_STATE } from './teams';

describe('teams reducer', () => {
	it('REQUEST_TEAMS after situation without errorMsg', () => {
		const action = {
			type: REQUEST_TEAMS,
		};

		expect(teams(INITIAL_STATE, action)).toEqual({
			...INITIAL_STATE,
			isFetching: true,
			error: '',
		});
	});

	it('REQUEST_TEAMS after error', () => {
		const initialState = {
			...INITIAL_STATE,
			isFetching: true,
			error: 'Unknown error',
		};

		const action = {
			type: REQUEST_TEAMS,
		};

		expect(teams(initialState, action)).toEqual({
			...initialState,
			isFetching: true,
			error: '',
		});
	});

	it('REQUEST_TEAMS_SUCCEEDED', () => {
		const initialState = {
			...INITIAL_STATE,
			isFetching: true,
		};

		const action = {
			type: REQUEST_TEAMS_SUCCEEDED,
			payload: ['team1', 'team2', 'team3'],
		};

		expect(teams(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			teams: action.payload,
		});
	});

	it('REQUEST_TEAMS_FAILED', () => {
		const initialState = {
			...INITIAL_STATE,
		};

		const action = {
			type: REQUEST_TEAMS_FAILED,
			error: 'Unknown error',
		};

		expect(teams(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			error: action.error,
		});
	});
});
