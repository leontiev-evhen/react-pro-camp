import { takeEvery, call, put } from 'redux-saga/effects';
import {
	REQUEST_TEAMS,
	REQUEST_TEAMS_SUCCEEDED,
	REQUEST_TEAMS_FAILED,
} from '../constants/actionTypes';
import { getLeagueTeamsById } from '../providers/teams';
import { ID_LEAGUE } from '../constants';

export function* watchGetTeams() {
	yield takeEvery(REQUEST_TEAMS, getTeamsWorker);
}

function* getTeamsWorker() {
	try {
		const teams = yield call(getLeagueTeamsById(ID_LEAGUE));
		yield put({ type: REQUEST_TEAMS_SUCCEEDED, payload: teams });
	} catch (e) {
		yield put({
			type: REQUEST_TEAMS_FAILED,
			payload: e.message || e.data.message,
		});
	}
}
