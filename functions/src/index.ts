import * as functions from 'firebase-functions';
const request = require('request');

const googleApiKey = 'AIzaSyBtpBBEMpGPGtNdVpgjIljd_oDR4KVWRN0';
const distanceMatrixApiRoot = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial';
const autocompleteApiRoot = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';

export const getTravelTimeData = functions.https.onRequest((req, res) => {

    const url = distanceMatrixApiRoot + "/" + req.body + "&key=" + googleApiKey;
    console.log(url);

    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('res.send()', body);
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Methods', 'GET, POST')
            res.status(200).send(body);
        }
    });
});

export const getPlaceAutocompleteData = functions.https.onRequest((req, res) => {

    const url = autocompleteApiRoot + req.body + "&key=" + googleApiKey;
    console.log(url);

    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('res.send()', body);
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Methods', 'GET, POST')
            res.status(200).send(body);
        }
    });
});