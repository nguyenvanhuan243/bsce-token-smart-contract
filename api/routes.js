'use strict';

module.exports = function (app) {
	const healthServerController = require('./controllers/healthServerController');
	const smartContractController = require('./controllers/smartContractController');
	const coin98Controller = require('./controllers/coin98Controller');

	app.route('/')
		.get(healthServerController.getHealthServer)

	app.route("/token")
		.get(smartContractController.tokenInformation)

	app.route("/coin98")
		.get(coin98Controller.tokenInformation)
};