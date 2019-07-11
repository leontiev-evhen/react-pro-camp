import { all, fork } from 'redux-saga/effects';
import { watchGetTeams } from './teamsSaga';
import { watchGetFixtures } from './fixturesSaga';

export default function* rootSaga() {
	yield all([fork(watchGetTeams), fork(watchGetFixtures)]);
}
