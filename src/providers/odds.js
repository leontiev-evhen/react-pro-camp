import request from '../utils/request';

export const getOddsLeagueById = id => {
	return request({
		url: `/odds/league/${id}`,
		method: 'GET',
	});
};
