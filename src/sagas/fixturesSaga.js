import { takeEvery, call, put } from 'redux-saga/effects';
import { getFixturesLeagueById } from '../providers/fixtures';
import { ID_LEAGUE } from '../constants';
import { REQUEST_FIXTURES } from '../constants/actionTypes';
import { requestFixturesSucceeded, requestFixturesFailed } from '../actions';

export function* watchGetFixtures() {
	yield takeEvery(REQUEST_FIXTURES, getFixturesWorker);
}

function* getFixturesWorker() {
	try {
		const response = yield call(getFixturesLeagueById, ID_LEAGUE);
		yield put(requestFixturesSucceeded(response.api.fixtures));
	} catch (e) {
		yield put(requestFixturesFailed(e.message || e.data.message));
	}
}
