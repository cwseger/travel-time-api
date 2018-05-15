"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const helper_1 = require("./helper");
const request = require('request');
exports.getLocationPredictions = functions.https.onRequest((req, res) => {
    const url = helper_1.Helper.buildPlacesUrl(req.body);
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Access-Control-Allow-Methods', 'GET, POST');
            res.status(200).send(body);
        }
    });
});
exports.getTravelTimes = functions.https.onRequest((req, res) => {
    const b = JSON.parse(req.body);
    let responses = [];
    b.departureTimes.forEach(departureTime => {
        const url = helper_1.Helper.buildTravelTimesUrl(b.origin, b.destination, b.settings, departureTime);
        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                responses.push({ 'body': JSON.parse(body), departureTime });
                if (responses.length == b.departureTimes.length) {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.set('Access-Control-Allow-Methods', 'GET, POST');
                    res.status(200).send(responses);
                }
            }
        });
    });
});
//# sourceMappingURL=index.js.map