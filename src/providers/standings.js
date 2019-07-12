import request from '../utils/request';

export const getStandingsLeagueById = id => {
	return request({
		url: `/leagueTable/${id}`,
		method: 'GET',
	});
};
