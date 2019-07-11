import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_TEAMS } from '../constants/actionTypes';
import { requestTeamsSucceeded, requestTeamsFailed } from '../actions';
import { getLeagueTeamsById } from '../providers/teams';
import { ID_LEAGUE } from '../constants';

export function* watchGetTeams() {
	yield takeEvery(REQUEST_TEAMS, getTeamsWorker);
}

function* getTeamsWorker() {
	try {
		const response = yield call(getLeagueTeamsById, ID_LEAGUE);
		yield put(requestTeamsSucceeded(response.api.teams));
	} catch (e) {
		yield put(requestTeamsFailed(e.message || e.data.message));
	}
}
