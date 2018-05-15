"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleApiKey = 'AIzaSyBtpBBEMpGPGtNdVpgjIljd_oDR4KVWRN0';
const autocompleteApiRoot = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const distanceMatrixApiRoot = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
class Helper {
    static buildPlacesUrl(fragment) {
        return (autocompleteApiRoot +
            "input=" + fragment +
            "&key=" + googleApiKey);
    }
    static buildTravelTimesUrl(origin, destination, settings, departureTime) {
        return (distanceMatrixApiRoot +
            'origins=' + origin +
            '&destinations=' + destination +
            '&mode=' + settings.travelMode +
            '&units=' + settings.unitSystem +
            '&departure_time=' + departureTime +
            '&traffic_model=' + settings.trafficModel +
            '&key=' + googleApiKey);
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map