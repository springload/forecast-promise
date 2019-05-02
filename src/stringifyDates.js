const toDateString = require('./toDateString');

module.exports = options => {

	if (options.start_date) {
		options.start_date = toDateString(options.start_date);
	}

	if (options.end_date) {
		options.end_date = toDateString(options.end_date);
	}

	return qs;
};
