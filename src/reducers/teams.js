import {
	REQUEST_TEAMS,
	REQUEST_TEAMS_SUCCEEDED,
	REQUEST_TEAMS_FAILED,
} from '../constants/actionTypes';

export const INITIAL_STATE = {
	isFetching: false,
	error: '',
	teams: [],
};

const teams = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_TEAMS:
			return {
				...state,
				isFetching: true,
				error: '',
			};
		case REQUEST_TEAMS_SUCCEEDED:
			return {
				...state,
				teams: action.payload,
				isFetching: false,
			};
		case REQUEST_TEAMS_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default teams;
