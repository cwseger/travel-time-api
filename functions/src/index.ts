import * as functions from 'firebase-functions';
const request = require('request');

export const getTravelTimeData = functions.https.onRequest((req, res) => {
    request(req.body, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
});
