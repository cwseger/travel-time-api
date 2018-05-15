import { Settings } from './models/settings.model';
import * as functions from 'firebase-functions';
import { Helper } from './helper';
const request = require('request');

export const getLocationPredictions = functions.https.onRequest((req, res) => {
    const url = Helper.buildPlacesUrl(req.body);
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Methods', 'GET, POST')
            res.status(200).send(body);
        }
    });
});

export const getTravelTimes = functions.https.onRequest((req, res) => {
    const b = JSON.parse(req.body);
    let responses = [];
    b.departureTimes.forEach(departureTime => {
        const url = Helper.buildTravelTimesUrl(b.origin, b.destination, b.settings, departureTime);
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
