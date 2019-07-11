import {
	REQUEST_FIXTURES,
	REQUEST_FIXTURES_SUCCEEDED,
	REQUEST_FIXTURES_FAILED,
	UPDATE_FIXTURES,
} from '../constants/actionTypes';

export const INITIAL_STATE = {
	isFetching: false,
	error: '',
	fixtures: [],
	tempFixtures: [],
	offset: 0,
	limit: 20,
};

const fixtures = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_FIXTURES:
			return {
				...state,
				isFetching: true,
				error: '',
			};
		case REQUEST_FIXTURES_SUCCEEDED:
			return {
				...state,
				fixtures: action.payload,
				tempFixtures: action.payload.slice(0, 20),
				isFetching: false,
			};
		case UPDATE_FIXTURES: {
			const newOffset = state.offset + 20;
			const newLimit = state.limit + 20;
			const newArr = state.fixtures.slice(newOffset, newLimit);
			return {
				...state,
				tempFixtures: [...state.tempFixtures, ...newArr],
				limit: newLimit,
				offset: newOffset,
				isFetching: false,
			};
		}
		case REQUEST_FIXTURES_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default fixtures;
