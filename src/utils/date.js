export function timeConverter(timestamp) {
	if (timestamp) {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const dateTime = new Date(timestamp * 1000);
		var year = dateTime.getFullYear();
		var month = months[dateTime.getMonth()];
		var date = dateTime.getDate();
		return date + ' ' + month + ' ' + year;
	}
	return 'incorrect date';
}
