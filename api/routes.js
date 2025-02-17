'use strict';
module.exports = function (app) {
	const healthServerController = require('./controllers/healthServerController');
	const smartContractController = require('./controllers/smartContractController');
	app.route('/')
		.get(healthServerController.getHealthServer)
	app.route("/token")
		.get(smartContractController.tokenInformation)
};