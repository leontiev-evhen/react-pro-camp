import request from '../utils/request';

export const getFixturesLeagueById = id => {
	return request({
		url: `/fixtures/league/${id}`,
		method: 'GET',
	});
};
