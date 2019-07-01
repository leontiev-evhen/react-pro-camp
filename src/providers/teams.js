import axios from 'axios';
import { API_URL } from '../constants';

export const getLeagueTeamsById = id => {
	return axios.get(`${API_URL}/teams/league/${id}`);
};
