'use strict';

module.exports = function (app) {
	const healthServerController = require('./controllers/healthServerController');
	const smartContractController = require('./controllers/smartContractController');
	const coin98Controller = require('./controllers/coin98Controller');
	const cakeController = require('./controllers/cakeController');
	const thetaController = require('./controllers/thetaController');

	app.route('/')
		.get(healthServerController.getHealthServer)

	app.route("/token")
		.get(smartContractController.tokenInformation)

	app.route("/coin98")
		.get(coin98Controller.tokenInformation)

	app.route("/cake")
		.get(cakeController.tokenInformation)

	app.route("/theta")
		.get(thetaController.tokenInformation)
};