import request from '../utils/request';

export const getLeagueTeamsById = id => {
	return request({
		url: `/teams/league/${id}`,
		method: 'GET',
	});
};
