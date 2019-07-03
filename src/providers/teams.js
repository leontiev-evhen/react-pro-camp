import request from '../utils/request';

export const getLeagueTeamsById = id => {
	return request({
		url: `/teams/league/${id}`,
		method: 'GET',
	});
};

export const getTeamById = id => {
	return request({
		url: `/teams/team/${id}`,
		method: 'GET',
	});
};
