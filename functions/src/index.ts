import * as functions from 'firebase-functions';
const request = require('request');

const googleApiKey = 'AIzaSyBtpBBEMpGPGtNdVpgjIljd_oDR4KVWRN0';
const autocompleteApiRoot = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';
const distanceMatrixApiRoot = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial';

export const getPlaceAutocompleteData = functions.https.onRequest((req, res) => {
    const url = autocompleteApiRoot + req.body + "&key=" + googleApiKey;

    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Methods', 'GET, POST')
            res.status(200).send(body);
        }
    });
});

export const getTravelTimeData = functions.https.onRequest((req, res) => {
    const url = distanceMatrixApiRoot + "/" + req.body + "&key=" + googleApiKey;

    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Methods', 'GET, POST')
            res.status(200).send(body);
        }
    });
});
