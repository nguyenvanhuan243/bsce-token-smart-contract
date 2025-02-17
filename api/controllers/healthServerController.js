"use strict";

module.exports.getHealthServer = function(req, res) {
    res.json({ server: "OK" });
};
