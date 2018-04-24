"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const request = require('request');
exports.getTravelTimeData = functions.https.onRequest((req, res) => {
    request(req.body, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
});
//# sourceMappingURL=index.js.map