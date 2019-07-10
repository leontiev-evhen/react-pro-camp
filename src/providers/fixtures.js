import request from '../utils/request';

export const getFixturesLeagueById = id => {
	return request({
		url: `/fixtures/league/${id}`,
		method: 'GET',
	});
};

export const getFixturesById = id => {
	return request({
		url: `/fixtures/id/${id}`,
		method: 'GET',
	});
};
