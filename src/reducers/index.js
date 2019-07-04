import { combineReducers } from 'redux';
import teams from './teams';

const root = combineReducers({
	teams,
});

export default root;
