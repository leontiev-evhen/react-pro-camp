import {
	REQUEST_FIXTURES,
	REQUEST_FIXTURES_SUCCEEDED,
	REQUEST_FIXTURES_FAILED,
	UPDATE_FIXTURES,
} from '../constants/actionTypes';
import fixtures, { INITIAL_STATE } from './fixtures';

describe('fixtures reducer', () => {
	it('REQUEST_FIXTURES after situation without errorMsg', () => {
		const action = {
			type: REQUEST_FIXTURES,
		};

		expect(fixtures(INITIAL_STATE, action)).toEqual({
			...INITIAL_STATE,
			isFetching: true,
			error: '',
		});
	});

	it('REQUEST_FIXTURES after error', () => {
		const initialState = {
			...INITIAL_STATE,
			isFetching: true,
			error: 'Unknown error',
		};

		const action = {
			type: REQUEST_FIXTURES,
		};

		expect(fixtures(initialState, action)).toEqual({
			...initialState,
			isFetching: true,
			error: '',
		});
	});

	it('REQUEST_FIXTURES_SUCCEEDED', () => {
		const initialState = {
			...INITIAL_STATE,
			isFetching: true,
		};

		const action = {
			type: REQUEST_FIXTURES_SUCCEEDED,
			payload: ['fixture1', 'fixture2', 'fixture3'],
		};

		expect(fixtures(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			fixtures: action.payload,
			tempFixtures: action.payload.slice(0, 20),
		});
	});

	it('UPDATE_FIXTURES', () => {
		const initialState = {
			...INITIAL_STATE,
			fixtures: ['fixture1', 'fixture2', 'fixture3'],
			tempFixtures: [],
			isFetching: true,
		};

		const action = {
			type: UPDATE_FIXTURES,
			payload: ['fixture1', 'fixture2', 'fixture3'],
		};

		const newOffset = initialState.offset + 20;
		const newLimit = initialState.limit + 20;
		const newArr = initialState.fixtures.slice(newOffset, newLimit);

		expect(newOffset).toEqual(20);
		expect(newLimit).toEqual(40);

		expect(fixtures(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			limit: newLimit,
			offset: newOffset,
			tempFixtures: [...initialState.tempFixtures, ...newArr],
		});
	});

	it('REQUEST_FIXTURES_FAILED', () => {
		const initialState = {
			...INITIAL_STATE,
		};

		const action = {
			type: REQUEST_FIXTURES_FAILED,
			error: 'Unknown error',
		};

		expect(fixtures(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			error: action.error,
		});
	});
});
