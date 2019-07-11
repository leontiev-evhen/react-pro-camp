import { combineReducers } from 'redux';
import teams from './teams';
import fixtures from './fixtures';

const root = combineReducers({
	teams,
	fixtures,
});

export default root;
