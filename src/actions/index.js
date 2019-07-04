import {
	REQUEST_TEAMS,
	REQUEST_TEAMS_SUCCEEDED,
	REQUEST_TEAMS_FAILED,
} from '../constants/actionTypes';
import { getLeagueTeamsById } from '../providers/teams';
import { ID_LEAGUE } from '../constants';

export const requestTeams = () => ({
	type: REQUEST_TEAMS,
});

export const requestTeamsSucceeded = teams => ({
	type: REQUEST_TEAMS_SUCCEEDED,
	payload: teams,
});

export const requestTeamsFailed = error => ({
	type: REQUEST_TEAMS_FAILED,
	error,
});

export const fetchTeams = () => async dispatch => {
	dispatch(requestTeams());
	try {
		const response = await getLeagueTeamsById(ID_LEAGUE);
		dispatch(requestTeamsSucceeded(response.api.teams));
	} catch (e) {
		dispatch(requestTeamsFailed(e.message || e.data.message));
	}
};
